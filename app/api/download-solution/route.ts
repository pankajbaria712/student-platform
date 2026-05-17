import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { subjectData } from "@/app/pyq/_data/subjects";
import { isAllowedStorageFile } from "@/lib/pyq/paths";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PREMIUM_STORAGE_BUCKET } from "@/lib/pyq/constants";
import { hasPaymentAccess } from "@/lib/pyq/payments-access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const buildCookieStore = (request: NextRequest) => ({
  getAll: async () =>
    request.cookies.getAll().map((cookie) => ({
      name: cookie.name,
      value: cookie.value,
    })),
  setAll: async () => {},
});

/**
 * GET /api/download-solution?file=wp-summer-2025-solution.pdf&subjectSlug=web-programming
 * Verifies payment access and returns a short-lived signed URL.
 */
export async function GET(request: NextRequest) {
  try {
    const file = request.nextUrl.searchParams.get("file");
    const subjectSlug = request.nextUrl.searchParams.get("subjectSlug");

    if (!file || !subjectSlug) {
      return NextResponse.json(
        { error: "file and subjectSlug are required" },
        { status: 400 },
      );
    }

    if (!isAllowedStorageFile(file)) {
      return NextResponse.json(
        { error: "Invalid solution file" },
        { status: 400 },
      );
    }

    const subject = subjectData[subjectSlug];
    if (!subject) {
      return NextResponse.json({ error: "Unknown subject" }, { status: 400 });
    }

    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: buildCookieStore(request),
      },
    );

    let user = null;
    if (token) {
      const {
        data: { user: bearerUser },
      } = await supabase.auth.getUser(token);
      user = bearerUser ?? null;
    }

    if (!user?.email) {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      user = session?.user ?? null;
    }

    if (!user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const access = await hasPaymentAccess({
      email: user.email,
      userId: user.id,
      subjectSlug,
      subjectCode: subject.code,
    });

    if (!access) {
      return NextResponse.json(
        { error: "Premium access required" },
        { status: 403 },
      );
    }

    // Create signed URL (short expiry)
    const expiresSeconds = 60 * 5; // 5 minutes
    const { data, error } = await supabaseAdmin.storage
      .from(PREMIUM_STORAGE_BUCKET)
      .createSignedUrl(file, expiresSeconds);

    if (error || !data?.signedUrl) {
      console.error("createSignedUrl error:", error);
      return NextResponse.json(
        { error: "Could not create signed URL" },
        { status: 500 },
      );
    }

    return NextResponse.json({ signedUrl: data.signedUrl });
  } catch (err) {
    console.error("download-solution error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

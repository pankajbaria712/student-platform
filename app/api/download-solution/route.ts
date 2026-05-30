import { NextRequest, NextResponse } from "next/server";
import { subjectData } from "@/app/pyq/_data/subjects";
import { isAllowedStorageFile } from "@/lib/pyq/paths";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PREMIUM_STORAGE_BUCKET } from "@/lib/pyq/constants";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/download-solution?file=wp-summer-2025-solution.pdf&subjectSlug=web-programming
 * Returns a short-lived signed URL for a valid solution file.
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

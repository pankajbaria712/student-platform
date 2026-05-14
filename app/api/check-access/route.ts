import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { supabaseAdmin } from "@/lib/supabase-admin";

const buildCookieStore = (request: NextRequest) => ({
  getAll: async () =>
    request.cookies.getAll().map((cookie) => ({
      name: cookie.name,
      value: cookie.value,
    })),
  setAll: async () => {
    // No-op for request-only server checks.
  },
});

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json({ access: false });
    }

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: buildCookieStore(request),
      },
    );

    const {
      data: { user },
    } = await supabase.auth.getUser(token);

    if (!user) {
      return NextResponse.json({ access: false });
    }

    const { subjectId } = await request.json();

    if (!subjectId) {
      return NextResponse.json(
        { error: "Subject ID is required" },
        { status: 400 },
      );
    }

    const { data, error } = await supabaseAdmin
      .from("payments")
      .select("id")
      .eq("user_id", user.id)
      .eq("subject_id", subjectId)
      .eq("status", "completed")
      .limit(1);

    if (error) {
      console.error("Check access error:", error);
      return NextResponse.json({ access: false }, { status: 500 });
    }

    return NextResponse.json({
      access: Array.isArray(data) && data.length > 0,
    });
  } catch (error) {
    console.error("Access check failed:", error);
    return NextResponse.json({ access: false }, { status: 500 });
  }
}

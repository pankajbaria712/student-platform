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
    // No-op for request-only auth lookup.
  },
});

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: buildCookieStore(request) },
    );

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { subjectId } = await request.json();

    if (!subjectId) {
      return NextResponse.json(
        { error: "Subject ID is required" },
        { status: 400 },
      );
    }

    const { data: payment, error: paymentError } = await supabaseAdmin
      .from("payments")
      .select("id")
      .eq("user_id", session.user.id)
      .eq("subject_id", subjectId)
      .eq("status", "completed")
      .limit(1)
      .single();

    if (paymentError || !payment) {
      return NextResponse.json(
        { error: "Premium access not available" },
        { status: 403 },
      );
    }

    const { data: subject, error: subjectError } = await supabaseAdmin
      .from("subjects")
      .select("premium_pdf_url")
      .eq("slug", subjectId)
      .single();

    if (subjectError || !subject) {
      return NextResponse.json({ error: "Subject not found" }, { status: 404 });
    }

    const { data, error } = await supabaseAdmin.storage
      .from("premium-pdfs")
      .createSignedUrl(subject.premium_pdf_url, 3600);
    if (error) {
      console.error("Storage error:", error);
      return NextResponse.json(
        { error: "Failed to generate download link" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      downloadUrl: data.signedUrl,
    });
  } catch (error) {
    console.error("Generate link error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

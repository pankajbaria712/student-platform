import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const { subjectId } = await request.json();

    if (!subjectId) {
      return NextResponse.json(
        { error: "Subject ID is required" },
        { status: 400 },
      );
    }

    // Get subject data
    const { data: subject, error: subjectError } = await supabaseAdmin
      .from("subjects")
      .select("premium_pdf_url")
      .eq("slug", subjectId)
      .single();

    if (subjectError || !subject) {
      return NextResponse.json({ error: "Subject not found" }, { status: 404 });
    }

    // Generate signed URL for private file
    const { data, error } = await supabaseAdmin.storage
      .from("premium-pdfs")
      .createSignedUrl(subject.premium_pdf_url, 3600); // 1 hour expiry

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

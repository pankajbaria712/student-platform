import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Allowed notes files in the "notes" bucket
const ALLOWED_NOTES_FILES = new Set([
  "Chepter-01.pdf",
  "Chepter-02.pdf",
  "Chepter-03.pdf",
  "Chepter-04.pdf",
  "Chepter-05.pdf",
  "Chepter-06.pdf",
]);

const NOTES_BUCKET = "notes";

/**
 * GET /api/get-notes-url?file=Chepter-01.pdf&subject=advanced-java-programming
 * Returns a short-lived signed URL for a valid notes PDF.
 */
export async function GET(request: NextRequest) {
  try {
    const file = request.nextUrl.searchParams.get("file");
    const subject = request.nextUrl.searchParams.get("subject");

    if (!file || !subject) {
      return NextResponse.json(
        { error: "file and subject are required" },
        { status: 400 },
      );
    }

    if (!ALLOWED_NOTES_FILES.has(file)) {
      return NextResponse.json(
        { error: "Invalid notes file" },
        { status: 400 },
      );
    }

    if (subject !== "advanced-java-programming") {
      return NextResponse.json(
        { error: "Notes not available for this subject" },
        { status: 404 },
      );
    }

    // Create signed URL (short expiry: 1 hour for viewing)
    const expiresSeconds = 60 * 60; // 1 hour
    const { data, error } = await supabaseAdmin.storage
      .from(NOTES_BUCKET)
      .createSignedUrl(file, expiresSeconds);

    if (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      console.error(`[get-notes-url] createSignedUrl failed for file="${file}" in bucket="${NOTES_BUCKET}":`, errorMsg);
      
      // Provide more helpful error messages
      if (errorMsg.includes("Object not found") || errorMsg.includes("404")) {
        return NextResponse.json(
          { 
            error: `Notes file not found in storage. Please ensure "${file}" is uploaded to the "${NOTES_BUCKET}" bucket in Supabase.` 
          },
          { status: 404 },
        );
      }
      
      return NextResponse.json(
        { error: "Could not create signed URL for notes: " + errorMsg },
        { status: 500 },
      );
    }

    if (!data?.signedUrl) {
      console.error(`[get-notes-url] No signed URL returned for file="${file}"`);
      return NextResponse.json(
        { error: "Could not generate access URL for notes" },
        { status: 500 },
      );
    }

    return NextResponse.json({ signedUrl: data.signedUrl });
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[get-notes-url] Unexpected error:", err);
    return NextResponse.json(
      { error: "Server error: " + errorMsg },
      { status: 500 },
    );
  }
}

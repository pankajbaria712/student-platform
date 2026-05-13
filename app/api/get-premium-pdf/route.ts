import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function GET() {
  const filePath = "wp-winter-2025-solution.pdf";

  const { data, error } = await supabase.storage
    .from("premium-pdfs")
    .createSignedUrl(filePath, 300); // 300 sec = 5 min

  if (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }

  return NextResponse.json({
    success: true,
    pdfUrl: data.signedUrl,
  });
}

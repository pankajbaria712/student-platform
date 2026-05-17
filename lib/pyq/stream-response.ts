import { NextResponse } from "next/server";

export function buildPdfStreamResponse(
  pdfBuffer: ArrayBuffer,
  fileName: string,
): NextResponse {
  const safeName = fileName.replace(/[^\w.-]/g, "_");

  return new NextResponse(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${safeName}"`,
      "Content-Length": String(pdfBuffer.byteLength),
      "Cache-Control": "no-store, no-cache, must-revalidate, private",
      Pragma: "no-cache",
      Expires: "0",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "Referrer-Policy": "no-referrer",
      "Content-Security-Policy":
        "default-src 'none'; sandbox; frame-ancestors 'self'",
      "X-Premium-Stream": "1",
    },
  });
}

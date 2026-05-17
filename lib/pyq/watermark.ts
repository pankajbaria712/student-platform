/**
 * Future: per-user dynamic watermarking before stream.
 *
 * Recommended stack:
 * - pdf-lib: stamp semi-transparent email + timestamp on each page server-side
 * - Run inside /api/stream-solution after downloadPremiumPdf(), before response
 * - Input: userEmail, purchasedAt, fileName
 * - Output: modified ArrayBuffer streamed to client
 *
 * Example flow:
 *   const raw = await downloadPremiumPdf(file);
 *   const stamped = await applyUserWatermark(raw.data, { email: user.email });
 *   return streamPdf(stamped, fileName);
 */

export type WatermarkContext = {
  email: string;
  subjectSlug: string;
  fileName: string;
};

export async function applyUserWatermark(
  pdfBuffer: ArrayBuffer,
  _context: WatermarkContext,
): Promise<ArrayBuffer> {
  // Placeholder — returns original PDF until pdf-lib is integrated.
  return pdfBuffer;
}

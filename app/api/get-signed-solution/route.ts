import { NextResponse } from "next/server";

/**
 * @deprecated Premium PDFs are streamed via GET /api/stream-solution only.
 */
export async function POST() {
  return NextResponse.json(
    {
      error:
        "This endpoint is disabled. Use /solution-viewer with /api/stream-solution.",
    },
    { status: 410 },
  );
}

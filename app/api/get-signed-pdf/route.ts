import { NextResponse } from "next/server";

/**
 * @deprecated Use GET /api/stream-solution via /solution-viewer instead.
 */
export async function POST() {
  return NextResponse.json(
    { error: "Use /solution-viewer with secure streaming." },
    { status: 410 },
  );
}

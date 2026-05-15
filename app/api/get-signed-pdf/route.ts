import { NextRequest, NextResponse } from "next/server";

/**
 * @deprecated Use POST /api/get-signed-solution instead (auth + access check).
 */
export async function POST(request: NextRequest) {
  return NextResponse.json(
    {
      error: "Use POST /api/get-signed-solution with Authorization header",
    },
    { status: 410 },
  );
}

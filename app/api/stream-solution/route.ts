import { NextRequest, NextResponse } from "next/server";
import { downloadPremiumPdf } from "@/lib/pyq/storage";
import { subjectData } from "@/app/pyq/_data/subjects";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const file = request.nextUrl.searchParams.get("file");
    const subjectSlug = request.nextUrl.searchParams.get("subjectSlug");

    if (!file || !subjectSlug) {
      return NextResponse.json(
        { error: "file and subjectSlug are required" },
        { status: 400 },
      );
    }

    const subject = subjectData[String(subjectSlug)];
    if (!subject) {
      return NextResponse.json({ error: "Unknown subject" }, { status: 400 });
    }

    const result = await downloadPremiumPdf(file);
    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }

    const headers = new Headers({
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${result.fileName}"`,
      "Cache-Control": "private, max-age=0, no-cache, no-store, must-revalidate",
      "X-Content-Type-Options": "nosniff",
    });

    return new NextResponse(result.data, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("stream-solution error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

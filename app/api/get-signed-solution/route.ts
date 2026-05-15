import { NextRequest, NextResponse } from "next/server";
import { hasPyqPremiumAccess } from "@/lib/pyq/access-server";
import { getUserFromBearerToken } from "@/lib/pyq/auth";
import { subjectData } from "@/app/pyq/_data/subjects";
import { createPremiumSignedUrl } from "@/lib/pyq/storage";
import { isAllowedStorageFile } from "@/lib/pyq/paths";

export const dynamic = "force-dynamic";

/**
 * POST /api/get-signed-solution
 * Body: { file: "wp-summer-2025-solution.pdf", subjectSlug: "web-programming" }
 */
export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await getUserFromBearerToken(request, token);

    if (!user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const file = body.file as string | undefined;
    const subjectSlug = body.subjectSlug as string | undefined;

    if (!file || !subjectSlug) {
      return NextResponse.json(
        { error: "file and subjectSlug are required" },
        { status: 400 },
      );
    }

    if (!isAllowedStorageFile(file)) {
      return NextResponse.json({ error: "Invalid solution file" }, { status: 400 });
    }

    const subject = subjectData[subjectSlug];
    if (!subject) {
      return NextResponse.json({ error: "Unknown subject" }, { status: 400 });
    }

    const access = await hasPyqPremiumAccess(user.email, user.id, {
      subjectSlug,
      subjectCode: subject.code,
    });

    if (!access) {
      return NextResponse.json(
        { error: "Premium access required" },
        { status: 403 },
      );
    }

    const signed = await createPremiumSignedUrl(file);

    if ("error" in signed) {
      return NextResponse.json({ error: signed.error }, { status: 500 });
    }

    return NextResponse.json({ url: signed.url });
  } catch (error) {
    console.error("get-signed-solution error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { hasPyqPremiumAccess } from "@/lib/pyq/access-server";
import { hasPaymentAccess } from "@/lib/pyq/payments-access";
import { getUserFromBearerToken } from "@/lib/pyq/auth";

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json({ access: false });
    }

    const user = await getUserFromBearerToken(request, token);

    if (!user?.email) {
      return NextResponse.json({ access: false });
    }

    const body = await request.json();
    const subjectSlug = body.subjectSlug ?? body.subjectId;
    const subjectCode = body.subjectCode;

    let access: boolean;

    if (subjectSlug) {
      access = await hasPyqPremiumAccess(user.email, user.id, {
        subjectSlug: String(subjectSlug),
        subjectCode: subjectCode ? String(subjectCode) : String(subjectSlug),
      });
    } else {
      access = await hasPaymentAccess({
        email: user.email,
        userId: user.id,
      });
    }

    return NextResponse.json({ access });
  } catch (error) {
    console.error("Access check failed:", error);
    return NextResponse.json({ access: false }, { status: 500 });
  }
}

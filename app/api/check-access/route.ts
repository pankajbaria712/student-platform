import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { hasPyqPremiumAccess } from "@/lib/pyq/access-server";
import { getUserFromBearerToken } from "@/lib/pyq/auth";

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    let user = null;

    if (token) {
      user = await getUserFromBearerToken(request, token);
    }

    if (!user?.email) {
      const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          cookies: {
            getAll: async () =>
              request.cookies.getAll().map((cookie) => ({
                name: cookie.name,
                value: cookie.value,
              })),
            setAll: async () => {},
          },
        },
      );

      const {
        data: { session },
      } = await supabase.auth.getSession();
      user = session?.user ?? null;
    }

    if (!user?.email) {
      return NextResponse.json({ access: false });
    }

    const body = await request.json();
    const subjectSlug = body.subjectSlug ?? body.subjectId;
    const subjectCode = body.subjectCode;

    if (!subjectSlug) {
      return NextResponse.json({ access: false }, { status: 400 });
    }

    const access = await hasPyqPremiumAccess(user.email, user.id, {
      subjectSlug: String(subjectSlug),
      subjectCode: subjectCode ? String(subjectCode) : String(subjectSlug),
    });

    return NextResponse.json({ access });
  } catch (error) {
    console.error("Access check failed:", error);
    return NextResponse.json({ access: false }, { status: 500 });
  }
}

import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = [
  "/api/create-order",
  "/api/verify-payment",
  "/api/generate-link",
  "/api/check-access",
  "/api/create-bundle-order",
  "/api/get-signed-solution",
];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: async () =>
          req.cookies.getAll().map((cookie) => ({
            name: cookie.name,
            value: cookie.value,
          })),
        setAll: async (cookies, headers) => {
          cookies.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options);
          });
          Object.entries(headers).forEach(([key, value]) => {
            res.headers.set(key, value);
          });
        },
      },
    },
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (protectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    // Check if there's a session from cookies OR an Authorization header
    const authHeader = req.headers.get("authorization");
    const hasToken = authHeader?.startsWith("Bearer ");

    if (!session && !hasToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return res;
}

export const config = {
  matcher: ["/api/:path*"],
};

import { createServerClient } from "@supabase/ssr";
import type { NextRequest } from "next/server";

function createAuthClient(request: NextRequest) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: async () =>
          request.cookies.getAll().map((c) => ({
            name: c.name,
            value: c.value,
          })),
        setAll: async () => {},
      },
    },
  );
}

/** Bearer token from Authorization header (API clients). */
export async function getUserFromBearerToken(
  request: NextRequest,
  token: string,
) {
  const supabase = createAuthClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser(token);
  return user;
}

/** Session cookie or Bearer token (viewer iframe + APIs). */
export async function getAuthenticatedUser(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");
  const supabase = createAuthClient(request);

  if (token) {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);
    if (user) return user;
    if (error) {
      console.warn("getAuthenticatedUser: bearer token failed", error.message);
    }
  }

  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    console.warn(
      "getAuthenticatedUser: session lookup failed",
      sessionError.message,
    );
  }

  return session?.user ?? null;
}

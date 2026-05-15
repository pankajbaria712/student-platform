import { createServerClient } from "@supabase/ssr";
import type { NextRequest } from "next/server";

export async function getUserFromBearerToken(
  request: NextRequest,
  token: string,
) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: async () =>
          request.cookies.getAll().map((c) => ({ name: c.name, value: c.value })),
        setAll: async () => {},
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser(token);

  return user;
}

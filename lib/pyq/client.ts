import { getSupabaseClient } from "@/lib/supabase";

async function getAuthHeaders(
  includeJsonContentType = true,
): Promise<HeadersInit | null> {
  const supabase = getSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) return null;

  const headers: HeadersInit = {
    Authorization: `Bearer ${session.access_token}`,
  };

  if (includeJsonContentType) {
    headers["Content-Type"] = "application/json";
  }

  return headers;
}

export async function checkPyqAccess(
  subjectSlug: string,
  subjectCode: string,
): Promise<boolean> {
  const headers = await getAuthHeaders();
  if (!headers) return false;

  const res = await fetch("/api/check-access", {
    method: "POST",
    headers,
    body: JSON.stringify({ subjectSlug, subjectCode }),
  });

  if (!res.ok) return false;

  const data = (await res.json()) as { access?: boolean };
  return Boolean(data.access);
}

export function getSolutionDownloadPath(
  solutionFile: string,
  subjectSlug: string,
): string {
  const params = new URLSearchParams({
    file: solutionFile,
    subjectSlug,
  });
  return `/api/download-solution?${params.toString()}`;
}

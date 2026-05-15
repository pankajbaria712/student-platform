import { getSupabaseClient } from "@/lib/supabase";

async function getAuthHeaders(): Promise<HeadersInit | null> {
  const supabase = getSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) return null;

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session.access_token}`,
  };
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

/** Fetches a short-lived Supabase signed URL for a premium solution PDF. */
export async function fetchSignedSolutionUrl(
  solutionFile: string,
  subjectSlug: string,
): Promise<{ url?: string; error?: string }> {
  const headers = await getAuthHeaders();
  if (!headers) {
    return { error: "login_required" };
  }

  const res = await fetch("/api/get-signed-solution", {
    method: "POST",
    headers,
    body: JSON.stringify({ file: solutionFile, subjectSlug }),
  });

  const data = (await res.json()) as { url?: string; error?: string };

  if (!res.ok) {
    return {
      error: data.error ?? (res.status === 403 ? "access_denied" : "request_failed"),
    };
  }

  if (!data.url) {
    return { error: "no_url" };
  }

  return { url: data.url };
}

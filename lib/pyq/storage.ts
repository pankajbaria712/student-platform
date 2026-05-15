import { supabaseAdmin } from "@/lib/supabase-admin";
import {
  PREMIUM_STORAGE_BUCKET,
  SIGNED_URL_TTL_SECONDS,
} from "./constants";
import { isAllowedStorageFile, normalizeStorageFile } from "./paths";

export async function createPremiumSignedUrl(
  storageFile: string,
): Promise<{ url: string } | { error: string }> {
  const file = normalizeStorageFile(storageFile);

  if (!isAllowedStorageFile(file)) {
    return { error: "Invalid or unknown solution file" };
  }

  const { data, error } = await supabaseAdmin.storage
    .from(PREMIUM_STORAGE_BUCKET)
    .createSignedUrl(file, SIGNED_URL_TTL_SECONDS);

  if (error || !data?.signedUrl) {
    console.error("createSignedUrl error:", error);
    return { error: error?.message ?? "Failed to generate signed URL" };
  }

  return { url: data.signedUrl };
}

import { supabaseAdmin } from "@/lib/supabase-admin";
import { PREMIUM_STORAGE_BUCKET } from "./constants";
import { isAllowedStorageFile, normalizeStorageFile } from "./paths";

export type PremiumPdfDownload =
  | { data: ArrayBuffer; fileName: string }
  | { error: string; status: number };

/**
 * Downloads a premium PDF from the private bucket (service role).
 * Never expose this URL to the client — stream via /api/stream-solution.
 */
export async function downloadPremiumPdf(
  storageFile: string,
): Promise<PremiumPdfDownload> {
  const fileName = normalizeStorageFile(storageFile);

  if (!isAllowedStorageFile(fileName)) {
    return { error: "Invalid or unknown solution file", status: 400 };
  }

  const { data, error } = await supabaseAdmin.storage
    .from(PREMIUM_STORAGE_BUCKET)
    .download(fileName);

  if (error || !data) {
    console.error("downloadPremiumPdf error:", error);
    return {
      error: error?.message ?? "Solution file not found",
      status: 404,
    };
  }

  const buffer = await data.arrayBuffer();
  return { data: buffer, fileName };
}

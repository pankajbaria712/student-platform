/** ₹19 PYQ bundle — stored in payments.subject_id */
export const PYQ_BUNDLE_SUBJECT_ID = "bundle";

/** Public free PYQ papers only */
export const PYQ_PDF_BASE = "/pdfs/pyq";

/** Supabase Storage bucket (private) for premium solution PDFs */
export const PREMIUM_STORAGE_BUCKET = "premium-pdfs";

/** Primary status written after Razorpay verification */
export const PAYMENT_STATUS_SUCCESS = "success";

/** Legacy rows may still use this value */
export const PAYMENT_STATUS_LEGACY_SUCCESS = "completed";

export const PAYMENT_SUCCESS_STATUSES = [
  PAYMENT_STATUS_SUCCESS,
  PAYMENT_STATUS_LEGACY_SUCCESS,
] as const;

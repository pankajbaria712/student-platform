import { supabaseAdmin } from "@/lib/supabase-admin";
import {
  PAYMENT_SUCCESS_STATUSES,
  PYQ_BUNDLE_SUBJECT_ID,
} from "./constants";

export type PaymentAccessContext = {
  email: string;
  userId?: string;
  subjectSlug?: string;
  subjectCode?: string;
};

/**
 * Permanent premium access from the existing `payments` table only.
 * A row counts when status is "success" (or legacy "completed").
 */
export async function hasPaymentAccess({
  email,
  userId,
  subjectSlug,
  subjectCode,
}: PaymentAccessContext): Promise<boolean> {
  if (!email && !userId) return false;

  const subjectFilters = [
    `subject_id.eq.${PYQ_BUNDLE_SUBJECT_ID}`,
    "subject_id.is.null",
  ];

  if (subjectSlug) {
    subjectFilters.push(`subject_id.eq.${subjectSlug}`);
  }
  if (subjectCode && subjectCode !== subjectSlug) {
    subjectFilters.push(`subject_id.eq.${subjectCode}`);
  }

  let query = supabaseAdmin
    .from("payments")
    .select("id")
    .in("status", [...PAYMENT_SUCCESS_STATUSES])
    .or(subjectFilters.join(","))
    .limit(1);

  if (email && userId) {
    query = query.or(`email.eq.${email},user_id.eq.${userId}`);
  } else if (email) {
    query = query.eq("email", email);
  } else if (userId) {
    query = query.eq("user_id", userId);
  }

  const { data, error } = await query;

  if (error) {
    console.error("hasPaymentAccess error:", error);
    return false;
  }

  return Array.isArray(data) && data.length > 0;
}

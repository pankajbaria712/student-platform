import { supabaseAdmin } from "@/lib/supabase-admin";
import { PAYMENT_SUCCESS_STATUSES, PYQ_BUNDLE_SUBJECT_ID } from "./constants";

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

  const subjectIds = new Set<string>();
  if (subjectSlug) subjectIds.add(subjectSlug);
  if (subjectCode && subjectCode !== subjectSlug) subjectIds.add(subjectCode);
  if (subjectIds.size === 0) return false;

  const userFilters = [];
  if (email) userFilters.push(`email.eq.${email}`);
  if (userId) userFilters.push(`user_id.eq.${userId}`);
  if (userFilters.length === 0) return false;

  const query = supabaseAdmin
    .from("payments")
    .select("id")
    .in("status", [...PAYMENT_SUCCESS_STATUSES])
    .in("subject_id", Array.from(subjectIds))
    .or(userFilters.join(","))
    .limit(1);

  const { data, error } = await query;

  if (error) {
    console.error("hasPaymentAccess error:", error);
    return false;
  }

  return Array.isArray(data) && data.length > 0;
}

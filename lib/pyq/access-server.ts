import { hasPaymentAccess, type PaymentAccessContext } from "./payments-access";

export type PyqAccessContext = {
  subjectSlug: string;
  subjectCode: string;
};

export async function hasPyqPremiumAccess(
  email: string,
  userId: string | undefined,
  { subjectSlug, subjectCode }: PyqAccessContext,
): Promise<boolean> {
  return hasPaymentAccess({
    email,
    userId,
    subjectSlug,
    subjectCode,
  });
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabaseClient } from "@/lib/supabase";

interface PremiumButtonProps {
  subjectId: string;
  subjectTitle: string;
}

export default function PremiumButton({
  subjectId,
  subjectTitle,
}: PremiumButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let mounted = true;

    const checkAccess = async () => {
      try {
        const supabase = getSupabaseClient();
        const sessionResult = await supabase.auth.getSession();
        const token = sessionResult.data.session?.access_token;

        if (!token) {
          if (mounted) {
            setAuthChecked(true);
          }
          return;
        }

        const response = await fetch("/api/check-access", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ subjectId }),
        });

        const result = await response.json();
        if (mounted) {
          setAccessGranted(result.access === true);
          setAuthChecked(true);
        }
      } catch (error) {
        if (mounted) {
          setAuthChecked(true);
          setAccessGranted(false);
        }
      }
    };

    checkAccess();

    return () => {
      mounted = false;
    };
  }, [subjectId]);

  const handlePremiumAction = async () => {
    if (!authChecked) {
      return;
    }

    setIsLoading(true);

    try {
      const supabase = getSupabaseClient();
      const sessionResult = await supabase.auth.getSession();
      const token = sessionResult.data.session?.access_token;

      if (!token) {
        router.push(`/login?next=/subject/${subjectId}`);
        return;
      }

      if (accessGranted) {
        const linkResponse = await fetch("/api/generate-link", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ subjectId }),
        });

        const linkData = await linkResponse.json();
        if (linkData.downloadUrl) {
          window.open(linkData.downloadUrl, "_blank");
        }
        return;
      }

      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          subjectId,
          amount: 33,
        }),
      });

      const data = await response.json();
      if (!data.orderId) {
        throw new Error(data.error || "Unable to create payment order.");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        name: "EduNext Premium",
        description: `Premium PDF - ${subjectTitle}`,
        order_id: data.orderId,
        handler: async function (response: any) {
          const verifyResponse = await fetch("/api/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyResponse.json();
          if (verifyData.success) {
            const linkResponse = await fetch("/api/generate-link", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ subjectId }),
            });

            const linkData = await linkResponse.json();
            if (linkData.downloadUrl) {
              window.open(linkData.downloadUrl, "_blank");
            }
          }
        },
        modal: {
          ondismiss: () => setIsLoading(false),
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Premium checkout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const buttonLabel = accessGranted
    ? "Open Premium PDF"
    : "Unlock Premium – ₹33";

  return (
    <button
      type="button"
      onClick={handlePremiumAction}
      disabled={isLoading}
      className="w-full min-h-[44px] rounded-2xl bg-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60 lg:w-auto lg:shrink-0"
    >
      {isLoading ? "Processing..." : buttonLabel}
    </button>
  );
}

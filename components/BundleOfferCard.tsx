"use client";

import { useState, useEffect } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";
import { PYQ_BUNDLE_SUBJECT_ID } from "@/lib/pyq/constants";

type BundleOfferCardProps = {
  onPaymentSuccess?: () => void | Promise<void>;
};

export default function BundleOfferCard({
  onPaymentSuccess,
}: BundleOfferCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const supabase = getSupabaseClient();
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;

      if (!token) {
        alert("Please log in first to purchase.");
        setIsLoading(false);
        return;
      }

      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          subjectId: PYQ_BUNDLE_SUBJECT_ID,
          amount: 19,
        }),
      });

      const orderData = await response.json();

      if (!response.ok || !orderData.orderId) {
        throw new Error(orderData.error || "Failed to create order");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: "INR",
        name: "GTU Student Hub",
        description: "All PYQ Solutions Bundle",
        order_id: orderData.orderId,
        handler: async function (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) {
          setIsLoading(true);
          try {
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

            if (verifyResponse.ok && verifyData.success) {
              if (onPaymentSuccess) {
                await onPaymentSuccess();
              } else {
                window.location.reload();
              }
            } else {
              alert(
                verifyData.error ||
                  "Payment verification failed. Please contact support.",
              );
            }
          } catch (err) {
            console.error("Verification Error:", err);
            alert("Payment verification failed. Please contact support.");
          } finally {
            setIsLoading(false);
          }
        },
        prefill: {
          email: data.session?.user?.email || "",
        },
        theme: { color: "#4f46e5" },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
          },
        },
      };

      const RazorpayCtor = (
        window as unknown as {
          Razorpay: new (o: unknown) => { open: () => void };
        }
      ).Razorpay;
      const rzp = new RazorpayCtor(options);
      rzp.open();
      setIsLoading(false);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      console.error("Payment error:", error);
      alert(message);
      setIsLoading(false);
    }
  };

  const Box = "div" as const;

  return (
    <Box id="bundle-offer-card" className="scroll-mt-24">
      <Box className="pointer-events-auto w-full max-w-md sm:max-w-sm">
        <Box className="rounded-2xl border border-indigo-500/30 bg-slate-950/95 p-4 shadow-2xl shadow-indigo-900/30 backdrop-blur-md transition-all hover:border-indigo-500/50 sm:p-6">
          <Box className="text-center">
            <Box className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-300 sm:mb-4 sm:text-xs">
              <Sparkles size={12} className="animate-pulse" /> Limited Exam offer
            </Box>

            <h3 className="mb-1 text-base font-bold sm:mb-2 sm:text-lg text-white">
              Get All Solutions
            </h3>
            <p className="mb-3 text-xs text-slate-400 sm:mb-4 sm:text-sm">
              Unlock verified step-by-step solutions for every paper in this subject.
            </p>

            <Box className="mb-4 flex items-center justify-center gap-3">
              <span className="text-3xl font-black text-green-400">₹19</span>
              <Box className="flex flex-col items-start">
                <span className="text-xs text-slate-500 line-through">₹199</span>
                <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] font-bold text-green-300">
                  90% off
                </span>
              </Box>
            </Box>

            <button
              type="button"
              onClick={handlePayment}
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Unlock Solution ₹19"
              )}
            </button>

            <p className="mt-4 text-[10px] text-slate-500">
              One-time payment • Lifetime access
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

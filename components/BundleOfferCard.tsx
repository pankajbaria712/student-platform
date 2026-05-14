"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";

export default function BundleOfferCard() {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const supabase = getSupabaseClient();
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;

      if (!token) {
        alert("Please log in first to purchase.");
        return;
      }

      const response = await fetch("/api/create-bundle-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: 19,
        }),
      });

      const data2 = await response.json();

      if (data2.orderId) {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: data2.amount,
          currency: "INR",
          name: "StudentHub",
          description: "All Paper Solutions Bundle",
          order_id: data2.orderId,
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
                subjectId: "bundle",
              }),
            });

            const verifyData = await verifyResponse.json();
            if (verifyData.success) {
              alert("Payment successful! All solutions unlocked.");
              window.location.reload();
            } else {
              alert("Payment verification failed.");
            }
          },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } else {
        alert("Failed to create order: " + (data2.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <div className="pointer-events-auto w-full max-w-md sm:max-w-sm">
        <div className="rounded-2xl border border-indigo-500/30 bg-slate-950/95 p-4 shadow-2xl shadow-indigo-900/30 backdrop-blur-md sm:rounded-2xl sm:bg-gradient-to-br sm:from-indigo-600/20 sm:to-purple-600/20 sm:p-6">
          <div className="text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-red-300 sm:mb-4 sm:text-xs">
              <Sparkles size={12} /> Exam offer
            </div>
            <h3 className="mb-1 text-base font-bold sm:mb-2 sm:text-lg">
              Get all paper solutions
            </h3>
            <p className="mb-3 text-xs text-slate-400 sm:mb-4 sm:text-sm">
              Unlock step-by-step solutions for every PYQ in this subject.
            </p>
            <div className="mb-3 flex flex-wrap items-center justify-center gap-2 sm:mb-4">
              <span className="text-2xl font-black text-green-400">₹19</span>
              <span className="text-base text-slate-500 line-through sm:text-lg">
                ₹199
              </span>
              <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] font-bold text-green-300 sm:text-xs">
                90% off
              </span>
            </div>
            <button
              type="button"
              onClick={handlePayment}
              disabled={isLoading}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-bold text-white shadow-lg transition hover:brightness-110 active:scale-[0.98] disabled:opacity-50 sm:rounded-xl sm:py-3"
            >
              {isLoading ? "Processing…" : "Buy now & unlock all"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

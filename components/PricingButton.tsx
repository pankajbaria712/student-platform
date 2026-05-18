"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";

type Props = {
  pack: "paper" | "subject" | "semester";
  subjectId?: string;
  amount: number;
  label: string;
};

export default function PricingButton({
  pack,
  subjectId,
  amount,
  label,
}: Props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleBuy = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const supabase = getSupabaseClient();
      const { data } = await supabase.auth.getSession();
      const token = data.session?.access_token;

      if (!token) {
        alert("Please log in to purchase.");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ subjectId, amount, pack }),
      });

      const order = await res.json();
      if (!res.ok || !order.orderId) {
        throw new Error(order.error || "Failed to create order");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "GTUStudentHub",
        description: label,
        order_id: order.orderId,
        handler: async function (response: any) {
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
              window.location.reload();
            } else {
              alert(verifyData.error || "Payment verification failed");
            }
          } catch (err) {
            console.error("Verification error:", err);
            alert("Payment verification failed. Please contact support.");
          }
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      } as any;

      const RazorpayCtor = (window as any).Razorpay;
      const rzp = new RazorpayCtor(options);
      rzp.open();
    } catch (err: any) {
      console.error("Purchase error:", err);
      alert(err?.message || "Failed to start checkout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="mt-3 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-500 disabled:opacity-60"
    >
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" /> Processing...
        </span>
      ) : (
        label
      )}
    </button>
  );
}

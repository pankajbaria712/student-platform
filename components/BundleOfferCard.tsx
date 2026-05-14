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
        // Initialize Razorpay
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: data2.amount,
          currency: "INR",
          name: "StudentHub",
          description: "All Paper Solutions Bundle",
          order_id: data2.orderId,
          handler: async function (response: any) {
            // Verify payment
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
              // Redirect or refresh
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
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 p-6 shadow-2xl backdrop-blur-sm">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={12} /> Exam Offer
          </div>
          <h3 className="text-lg font-bold mb-2">Get All Paper Solutions</h3>
          <p className="text-sm text-gray-300 mb-4">
            Unlock step-by-step solutions for all previous year question papers
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-black text-green-400">₹19</span>
            <span className="text-lg text-gray-500 line-through">₹199</span>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full font-bold">
              90% OFF
            </span>
          </div>
          <button
            onClick={handlePayment}
            disabled={isLoading}
            className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg disabled:opacity-50"
          >
            {isLoading ? "Processing..." : "Buy Now & Unlock All"}
          </button>
        </div>
      </div>
    </div>
  );
}

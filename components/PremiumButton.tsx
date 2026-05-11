"use client";

import { useState } from "react";

interface PremiumButtonProps {
  subjectId: string;
  subjectTitle: string;
}

export default function PremiumButton({
  subjectId,
  subjectTitle,
}: PremiumButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subjectId,
          amount: 33,
        }),
      });

      const data = await response.json();

      if (data.orderId) {
        // Initialize Razorpay
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: data.amount,
          currency: "INR",
          name: "StudentHub",
          description: `Premium PDF - ${subjectTitle}`,
          order_id: data.orderId,
          handler: async function (response: any) {
            // Verify payment
            const verifyResponse = await fetch("/api/verify-payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                subjectId,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              // Generate download link
              const linkResponse = await fetch("/api/generate-link", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  subjectId,
                }),
              });

              const linkData = await linkResponse.json();

              if (linkData.downloadUrl) {
                window.open(linkData.downloadUrl, "_blank");
              }
            }
          },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      }
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading}
      className="rounded-2xl bg-black px-6 py-3 text-white shadow-sm transition hover:bg-gray-800 disabled:opacity-50"
    >
      {isLoading ? "Processing..." : "Download Premium PDF – ₹33"}
    </button>
  );
}

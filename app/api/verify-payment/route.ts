import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      subjectId,
    } = await request.json();

    // Verify payment signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature !== expectedSign) {
      return NextResponse.json(
        { error: "Payment verification failed" },
        { status: 400 },
      );
    }

    // Update payment status in database
    const { error } = await supabaseAdmin
      .from("payments")
      .update({
        status: "completed",
      })
      .eq("payment_id", razorpay_order_id);

    if (error) {
      console.error("Database update error:", error);
      return NextResponse.json(
        { error: "Failed to update payment status" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      subjectId,
    });
  } catch (error) {
    console.error("Verify payment error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

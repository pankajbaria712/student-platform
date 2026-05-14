import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;
    if (!key_id || !key_secret) {
      console.error("Razorpay credentials are not configured.");
      return NextResponse.json(
        { error: "Payment gateway is not configured" },
        { status: 500 },
      );
    }

    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    // Validate input - for bundle, amount should be 19
    if (!amount || amount !== 19) {
      return NextResponse.json(
        { error: "Invalid request parameters" },
        { status: 400 },
      );
    }

    // Create Razorpay order
    const options = {
      amount: amount * 100, // Razorpay expects amount in paisa
      currency: "INR",
      receipt: `receipt_bundle_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    // Store order in database
    const { error } = await supabaseAdmin.from("payments").insert({
      payment_id: order.id,
      subject_id: null,
      amount: amount,
      status: "pending",
      email: "bundle@studenthub.com",
    });

    if (error) {
      console.error("Database error:", error);
      return NextResponse.json(
        { error: "Failed to create order" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
    });
  } catch (error) {
    console.error("Create bundle order error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

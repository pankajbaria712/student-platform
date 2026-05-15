import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { createServerClient } from "@supabase/ssr";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PAYMENT_STATUS_SUCCESS } from "@/lib/pyq/constants";

const buildCookieStore = (request: NextRequest) => ({
  getAll: async () =>
    request.cookies.getAll().map((cookie) => ({
      name: cookie.name,
      value: cookie.value,
    })),
  setAll: async () => {},
});

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { cookies: buildCookieStore(request) },
    );

    const {
      data: { user },
    } = await supabase.auth.getUser(token);

    if (!user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      await request.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing payment verification fields" },
        { status: 400 },
      );
    }

    const sign = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign)
      .digest("hex");

    if (razorpay_signature !== expectedSign) {
      return NextResponse.json(
        { error: "Payment verification failed" },
        { status: 400 },
      );
    }

    const { data: payment, error: fetchError } = await supabaseAdmin
      .from("payments")
      .select("id, user_id, amount, subject_id, status")
      .eq("payment_id", razorpay_order_id)
      .single();

    if (fetchError || !payment) {
      return NextResponse.json(
        { error: "Payment record not found" },
        { status: 404 },
      );
    }

    if (payment.user_id !== user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { error: updateError } = await supabaseAdmin
      .from("payments")
      .update({
        status: PAYMENT_STATUS_SUCCESS,
        email: user.email,
      })
      .eq("payment_id", razorpay_order_id);

    if (updateError) {
      console.error("Database update error:", updateError);
      return NextResponse.json(
        { error: "Failed to update payment status" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      access: true,
      message: "Payment verified successfully",
    });
  } catch (error) {
    console.error("Verify payment error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

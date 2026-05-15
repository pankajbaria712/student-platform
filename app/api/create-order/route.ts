import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { createServerClient } from "@supabase/ssr";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { PYQ_BUNDLE_SUBJECT_ID } from "@/lib/pyq/constants";

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

    const { subjectId, amount } = await request.json();
    const key_id = process.env.RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      return NextResponse.json(
        { error: "Payment gateway is not configured" },
        { status: 500 },
      );
    }

    const isBundle =
      subjectId === PYQ_BUNDLE_SUBJECT_ID && Number(amount) === 19;
    const isSubject = subjectId && Number(amount) === 33;

    if (!isBundle && !isSubject) {
      return NextResponse.json(
        { error: "Invalid request parameters" },
        { status: 400 },
      );
    }

    const razorpay = new Razorpay({ key_id, key_secret });

    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: isBundle
        ? `bundle_${Date.now()}`
        : `subject_${subjectId}_${Date.now()}`,
    });

    const { error } = await supabaseAdmin.from("payments").insert({
      user_id: user.id,
      email: user.email,
      subject_id: subjectId,
      payment_id: order.id,
      amount: Number(amount),
      status: "pending",
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
      currency: order.currency,
    });
  } catch (error) {
    console.error("Create order error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

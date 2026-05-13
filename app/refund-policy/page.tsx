import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-16">
          <h1 className="mb-4 text-5xl font-black tracking-tight">
            Refund <span className="text-indigo-500">Policy</span>
          </h1>
          <p className="text-xl text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              At StudentHub, we strive to provide high-quality educational
              resources. This Refund Policy outlines the conditions under which
              refunds may be granted for our premium services and digital
              products.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">2. Digital Products</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For digital products including PDF downloads, notes, and study
              materials:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Refunds are available within 7 days of purchase</li>
              <li>
                The digital content must not have been downloaded or accessed
              </li>
              <li>
                Technical issues preventing access may qualify for full refund
              </li>
              <li>Content quality issues must be reported within 24 hours</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              3. Premium Subscriptions
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For premium subscription services:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Monthly subscriptions: Refund available within 7 days</li>
              <li>Annual subscriptions: Refund available within 14 days</li>
              <li>Partial refunds may be offered for unused portions</li>
              <li>Service interruptions may qualify for prorated refunds</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Non-Refundable Items</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The following are generally not eligible for refunds:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Items purchased more than 30 days ago</li>
              <li>Digital content that has been downloaded and used</li>
              <li>Services that have been fully consumed</li>
              <li>Promotional or discounted items (unless defective)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">5. Refund Process</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To request a refund:
            </p>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>Contact our support team at support@studenthub.com</li>
              <li>Provide your order number and reason for refund</li>
              <li>Include any relevant documentation or evidence</li>
              <li>Allow 3-5 business days for review and processing</li>
            </ol>
            <p className="text-gray-300 leading-relaxed mt-4">
              Refunds will be processed to the original payment method within
              7-10 business days after approval.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Exceptions</h2>
            <p className="text-gray-300 leading-relaxed">
              We may make exceptions to this policy on a case-by-case basis for
              technical issues, billing errors, or other extraordinary
              circumstances. Contact our support team to discuss your specific
              situation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              For refund requests or questions about this policy, please contact
              us:
            </p>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-gray-300">
                Email: refunds@gtustudenthub.com
                <br />
                Phone: +91 9023928572
                <br />
                Support Hours: Mon-Fri 9AM - 6PM IST
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

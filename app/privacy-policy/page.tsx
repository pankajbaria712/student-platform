import React from "react";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      
      <main className="mx-auto max-w-4xl px-page py-12 sm:py-16 md:py-20">
        <div className="mb-10 sm:mb-16">
          <h1 className="mb-3 text-3xl font-black tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
            Privacy <span className="text-indigo-500">Policy</span>
          </h1>
          <p className="text-sm text-gray-400 sm:text-base md:text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 sm:prose-base">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              StudentHub ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our website
              and services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              2. Information We Collect
            </h2>
            <h3 className="mb-2 text-xl font-semibold">Personal Information</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may collect personal information that you provide directly to
              us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Payment information for premium services</li>
              <li>Account credentials and preferences</li>
              <li>Communications you send to us</li>
            </ul>

            <h3 className="mb-2 mt-6 text-xl font-semibold">
              Usage Information
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We automatically collect certain information when you use our
              services, including IP address, browser type, operating system,
              and usage patterns.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Providing and maintaining our services</li>
              <li>Processing payments and transactions</li>
              <li>Sending administrative information and updates</li>
              <li>Responding to your comments and questions</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Information Sharing</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this policy. We may share your information with
              trusted service providers who assist us in operating our website
              and conducting our business.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Correct any inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar technologies to enhance your
              experience, analyze usage, and assist in our marketing efforts.
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">9. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-gray-300">
                Email: privacy@gtustudenthub.com
                <br />
                Phone: +91 90239 28572
                <br />
                Address: Ambaliyat, Lunawada, Mahisager (389230), Gujarat, India
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}


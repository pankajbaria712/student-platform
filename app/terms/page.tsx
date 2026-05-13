import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-16">
          <h1 className="mb-4 text-5xl font-black tracking-tight">
            Terms of <span className="text-indigo-500">Service</span>
          </h1>
          <p className="text-xl text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using StudentHub ("the Service"), you accept and
              agree to be bound by the terms and provision of this agreement. If
              you do not agree to abide by the above, please do not use this
              service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              2. Description of Service
            </h2>
            <p className="text-gray-300 leading-relaxed">
              StudentHub provides educational resources including notes,
              previous year question papers (PYQs), syllabus information, and
              premium PDF downloads for BE Computer Engineering students. Our
              services are intended for educational purposes only.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">3. User Accounts</h2>
            <h3 className="mb-2 text-xl font-semibold">Account Creation</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              To access certain features, you may need to create an account. You
              are responsible for maintaining the confidentiality of your
              account credentials.
            </p>

            <h3 className="mb-2 text-xl font-semibold">
              Account Responsibilities
            </h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain and update your information</li>
              <li>Keep your password secure</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">4. Acceptable Use</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree to use the Service only for lawful purposes and in
              accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Violate any laws in your jurisdiction</li>
              <li>Infringe on intellectual property rights</li>
              <li>Distribute harmful or malicious content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated tools to access the service</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              5. Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The Service and its original content, features, and functionality
              are and will remain the exclusive property of StudentHub and its
              licensors. The service is protected by copyright, trademark, and
              other laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">6. Payment Terms</h2>
            <h3 className="mb-2 text-xl font-semibold">Premium Services</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Some services require payment. By purchasing premium services, you
              agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Pay all fees associated with your account</li>
              <li>Provide accurate billing information</li>
              <li>Authorize us to charge your payment method</li>
            </ul>

            <h3 className="mb-2 mt-6 text-xl font-semibold">Refunds</h3>
            <p className="text-gray-300 leading-relaxed">
              Refund requests are subject to our Refund Policy, which is
              incorporated into these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">7. Disclaimers</h2>
            <p className="text-gray-300 leading-relaxed">
              The information on this website is provided on an "as is" basis.
              We make no representations or warranties of any kind, express or
              implied, as to the operation of the service or the information,
              content, or materials included therein.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall StudentHub, its directors, employees, or agents
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of the
              service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">9. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your account and access to the service
              immediately, without prior notice, for any reason, including
              breach of these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">10. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will
              notify users of any changes by updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">11. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of India, without regard to its conflict of law
              provisions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">12. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-gray-300">
                Email: legal@gtustudenthub.com
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

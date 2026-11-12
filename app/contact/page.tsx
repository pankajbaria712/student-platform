import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Footer from "@/components/Footer";
import FeedbackForm from "@/components/FeedbackForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      
      <main className="mx-auto max-w-4xl px-page py-12 sm:py-16 md:py-20">
        <div className="mb-10 text-center sm:mb-16">
          <h1 className="mb-3 text-3xl font-black tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
            Get in <span className="text-indigo-500">Touch</span>
          </h1>
          <p className="text-base text-gray-400 sm:text-lg md:text-xl">
            Have questions about our platform? We're here to help.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-xl font-bold sm:text-2xl">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                    <Mail className="h-6 w-6 text-indigo-400" />
                  </div>
                <div className="min-w-0 flex-1">
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">refunds@gtustudenthub.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                    <Phone className="h-6 w-6 text-indigo-400" />
                  </div>
                <div className="min-w-0 flex-1">
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+91 90239 28572</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                    <MapPin className="h-6 w-6 text-indigo-400" />
                  </div>
                <div className="min-w-0 flex-1">
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-400">
                      Ambaliyat, Lunawada, Mahisager (389230), Gujarat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
                    <Clock className="h-6 w-6 text-indigo-400" />
                  </div>
                <div className="min-w-0 flex-1">
                    <p className="font-semibold">Support Hours</p>
                    <p className="text-gray-400">Mon-Fri: 9AM - 6PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-4 font-semibold">Quick Response Guarantee</h3>
              <p className="text-gray-400">
                We respond to all inquiries within 24 hours. For urgent
                technical issues, expect a response within 4 hours during
                business hours.
              </p>
            </div>
          </div>

          <FeedbackForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}


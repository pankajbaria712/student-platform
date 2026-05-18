"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { getSupabaseClient } from "@/lib/supabase";
import { checkPyqAccess } from "@/lib/pyq/client";

import Disclaimer from "@/components/Disclaimer";
import BundleOfferCard from "@/components/BundleOfferCard";
import Navbar from "@/components/Navbar";
import PyqPaperCard from "@/components/PyqPaperCard";
import type { Subject } from "../_data/subjects";

const FEATURES: Array<{ icon: LucideIcon; title: string; desc: string }> = [
  { icon: ShieldCheck, title: "Verified", desc: "Corrected by experts" },
  { icon: Sparkles, title: "Step-by-Step", desc: "Detailed explanations" },
  { icon: Zap, title: "Instant", desc: "Email + Web Access" },
];

export function PyqSubjectView({
  subject,
  subjectSlug,
}: {
  subject: Subject;
  subjectSlug: string;
}) {
  const freeTestSubject =
    subjectSlug === "integrated-personality-development-course";
  const [isPaid, setIsPaid] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);

  const refreshAccess = useCallback(async () => {
    if (freeTestSubject) {
      setIsPaid(true);
      setCheckingAccess(false);
      return;
    }

    setCheckingAccess(true);
    try {
      const supabase = getSupabaseClient();
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setIsPaid(false);
        return;
      }

      const access = await checkPyqAccess(subjectSlug, subject.code);
      setIsPaid(access);
    } catch (err) {
      console.error("Error checking payment:", err);
      setIsPaid(false);
    } finally {
      setCheckingAccess(false);
    }
  }, [freeTestSubject, subjectSlug, subject.code]);

  useEffect(() => {
    refreshAccess();
  }, [refreshAccess]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050505] pb-40 font-sans text-white antialiased selection:bg-indigo-500/30 sm:pb-24">
      <div className="fixed inset-0 z-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-4 pb-12 pt-8 sm:pb-20 sm:pt-12">
        <Link
          href={`/semester/${subject.semester}`}
          className="mb-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-indigo-400"
        >
          <ChevronLeft size={14} />
          Back to Semester {subject.semester}
        </Link>

        <header className="mb-10 sm:mb-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-indigo-400">
                <Zap size={12} fill="currentColor" />
                Expert PYQ Collection
              </div>

              <h1 className="mb-4 text-3xl font-black leading-tight tracking-tighter sm:text-4xl md:mb-6 md:text-6xl">
                {subject.title}
                <br />
                <span className="italic text-indigo-500 underline decoration-white/10 underline-offset-8">
                  {freeTestSubject
                    ? "IPDC Practice Test Library"
                    : "Question Papers Solution"}
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                {subject.description}
              </p>
            </div>

            <div className="lg:justify-self-end">
              {checkingAccess ? (
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center text-sm text-gray-500">
                  Checking access...
                </div>
              ) : freeTestSubject ? (
                <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/5 p-6 text-center">
                  <Sparkles
                    className="mx-auto mb-2 text-indigo-400"
                    size={24}
                  />
                  <p className="text-sm font-bold text-indigo-200">
                    IPDC Test Access
                  </p>
                  <p className="text-xs text-indigo-300/80">
                    Free access to all IPDC practice tests — no payment
                    required.
                  </p>
                </div>
              ) : !isPaid ? (
                <BundleOfferCard onPaymentSuccess={refreshAccess} />
              ) : (
                <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6 text-center">
                  <Sparkles className="mx-auto mb-2 text-green-400" size={24} />
                  <p className="text-sm font-bold text-green-400">
                    Premium Access Active
                  </p>
                  <p className="text-xs text-green-500/70">
                    All solutions unlocked for you.
                  </p>
                </div>
              )}
            </div>
          </div>
        </header>

        <section className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <item.icon size={20} />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-widest">
                  {item.title}
                </div>
                <div className="text-[10px] font-bold text-gray-500">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">
              Available Papers
            </span>
            <span className="text-[10px] text-gray-500">Source: GTU</span>
          </div>

          {subject.papers.length > 0 ? (
            subject.papers.map((paper) => (
              <PyqPaperCard
                key={`${paper.code}-${paper.year}-${paper.type}`}
                paper={paper}
                subjectSlug={subjectSlug}
                isPaid={isPaid}
                onRequestUnlock={() => {
                  document
                    .getElementById("bundle-offer-card")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            ))
          ) : (
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] p-10 text-center">
              <p className="text-lg font-semibold text-gray-400">
                No papers available yet.
              </p>
            </div>
          )}
        </section>

        <div className="mb-16 mt-12">
          <Disclaimer />
        </div>
      </main>

      <footer className="mt-12 border-t border-white/5 py-10 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">
          Powered by GTUStudentHub Advanced Learning Systems
        </p>
      </footer>
    </div>
  );
}

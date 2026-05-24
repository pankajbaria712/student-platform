"use client";

import { PYQ_BUNDLE_PRICE } from "@/lib/pyq/constants";

type PremiumLockCardProps = {
  onUnlock: () => void;
  loading: boolean;
  authenticated: boolean;
};

export default function PremiumLockCard({
  onUnlock,
  loading,
  authenticated,
}: PremiumLockCardProps) {
  return (
    <section className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-6 shadow-2xl shadow-black/20 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-indigo-200 ring-1 ring-indigo-400/20">
            Premium access
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Unlock all MPI Winter 2025 answers
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Login, pay ₹{PYQ_BUNDLE_PRICE}, and get instant access to the complete set of solved MPI questions. No PDF viewer, no signed links — just web-native answers.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end">
          <span className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white ring-1 ring-slate-700">
            ₹{PYQ_BUNDLE_PRICE} only
          </span>
          <button
            type="button"
            onClick={onUnlock}
            disabled={loading}
            className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Processing..." : authenticated ? "Unlock Premium Access" : "Login to Unlock"}
          </button>
        </div>
      </div>
    </section>
  );
}

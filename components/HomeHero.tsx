import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden rounded-[2rem] bg-slate-950/90 shadow-[0_20px_60px_rgba(15,23,42,0.3)]">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 md:py-8 lg:px-8 xl:px-10 lg:py-10">
        <div className="grid w-full gap-4 sm:gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-8">
          <div className="space-y-3 sm:space-y-4 md:space-y-5 text-center lg:text-left lg:max-w-[620px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-300">
              <Sparkles className="h-4 w-4 text-indigo-300" />
              GTU Study Resources
            </div>

            <h1 className="text-[1.75rem] font-black leading-snug tracking-[-0.03em] text-white sm:text-[2rem] md:text-[2.5rem] lg:text-[3.75rem] lg:leading-tight">
              Find GTU Notes, PYQs, MCQs, and Study Resources Faster.
            </h1>

            <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 md:text-[1.02rem] md:leading-8 lg:mx-0">
              Access semester-wise notes, previous year papers, MCQ practice, and verified GTU study materials in one premium mobile-first hub.
            </p>

            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
              <Link
                href="/semester/5"
                className="inline-flex min-h-[44px] w-full items-center justify-center rounded-2xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 sm:text-base"
              >
                Browse Semesters
              </Link>
              <Link
                href="/notes"
                className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 sm:text-base"
              >
                Explore Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
              {[
                "Subjects",
                "Notes",
                "PYQs",
                "Semesters",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-200 sm:px-4 sm:py-3 sm:text-[11px]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative overflow-hidden rounded-[1.75rem]">
            <img
              src="/image.png"
              alt="GTU Notes and PYQs"
              className="h-full w-full min-h-[260px] max-h-[600px] rounded-[1.5rem] object-fit object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

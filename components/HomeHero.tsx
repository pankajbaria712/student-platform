import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";

export default function HomeHero({ children }: { children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-slate-950/90 px-6 py-8 shadow-[0_25px_80px_rgba(15,23,42,0.35)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-indigo-300">
            <Sparkles className="h-4 w-4 text-indigo-300" />
            GTU Study Resources
          </div>

          <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            GTU Study Resources.
            <span className="block text-transparent bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text">
              All In One Place.
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Access GTU Notes, Previous Year Papers, MCQ Tests, Syllabus PDFs and Study Materials organized semester-wise.
          </p>

          <div className="space-y-5">
            <div className="w-full">{children}</div>

            <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <Link
                href="/notes"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-400"
              >
                Explore Resources
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/semester/5"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-slate-100 transition hover:border-indigo-300/40 hover:bg-white/10"
              >
                Browse Semesters
              </Link>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Semester-wise Resources",
                "Free Access",
                "Mobile Friendly",
                "Regularly Updated",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/80 px-2 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl p-1 shadow-[0_35px_90px_rgba(15,23,42,0.3)]">
          <img
            src="/image.png"
            alt="GTU Notes and PYQs"
            className="w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

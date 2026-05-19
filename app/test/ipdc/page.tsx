import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ipdcMcqData } from "@/lib/ipdc/mcqs";

export default function Page() {
  const tests = Object.values(ipdcMcqData);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="relative z-10">
        <Navbar />
      </div>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
            IPDC Free Test Library
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">
            Integrated Personality Development Course
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-300 sm:text-base">
            Choose your IPDC mock test and practice the exact GTU MCQ format
            with instant scoring and answer review.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "FREE TEST SERIES",
              "Most Popular",
              "Exam Ready",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-8 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-indigo-200">
              Prepare using real GTU MCQ papers
            </p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              Real GTU MCQ practice for IPDC
            </h2>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              Instant scoring, answer review, and exam-ready confidence for GTU students.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pyq/integrated-personality-development-course"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white hover:border-indigo-400"
            >
              Back to IPDC Subject
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {tests.map((test) => (
            <Link
              key={test.slug}
              href={`/test/ipdc/${encodeURIComponent(test.slug)}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-indigo-400/70 hover:bg-white/10"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-indigo-300">
                    {test.slug.toUpperCase()}
                  </p>
                  <h2 className="mt-3 text-xl font-black text-white">
                    {test.title}
                  </h2>
                </div>
                <span className="rounded-full bg-indigo-500/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.3em] text-indigo-300">
                  Free
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                {test.totalQuestions} questions • {test.totalMarks} marks •
                Instant answer review.
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

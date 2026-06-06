import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { subjectPageData } from "@/app/subject/_data/subjects";

const BASE_URL = "https://gtustudenthub.vercel.app";

export function generateStaticParams() {
  return Object.values(subjectPageData)
    .filter((subject) => subject.notesStatus !== "not-applicable" && subject.notesSlug)
    .map((subject) => ({ slug: subject.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const subject = subjectPageData[params.slug];
  if (!subject || subject.notesStatus === "not-applicable") {
    return {
      title: "Notes not found",
      description: "The requested notes page could not be found.",
    };
  }

  return {
    title: `${subject.title} Notes — GTU Semester ${subject.semester}`,
    description: `Chapter-wise notes and revision planning for ${subject.title}.`,
    openGraph: {
      title: `${subject.title} Notes — GTU Semester ${subject.semester}`,
      description: `Notes preparation and revision support for ${subject.title}.`,
      url: `${BASE_URL}/notes/${subject.slug}`,
    },
    alternates: {
      canonical: `${BASE_URL}/notes/${subject.slug}`,
    },
  };
}

interface NotesPageProps {
  params: {
    slug: string;
  };
}

const placeholderChapters = [
  { number: 1, title: "Concept foundations" },
  { number: 2, title: "Exam-focused topics" },
  { number: 3, title: "Practice problems" },
  { number: 4, title: "Revision checklist" },
];

export default function NotesPage({ params }: NotesPageProps) {
  const subject = subjectPageData[params.slug];
  if (!subject || subject.notesStatus === "not-applicable") notFound();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto max-w-6xl px-page py-8 sm:py-10">
        <div className="mb-8 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
                Notes • Semester {subject.semester}
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {subject.title} Notes
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                This page is being prepared with chapter-wise notes and structured revision support.
              </p>
            </div>

            <Link
              href={`/subject/${subject.slug}`}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white"
            >
              Back to subject page
            </Link>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
              <h2 className="text-2xl font-semibold text-white">Notes preparation status</h2>
              <p className="mt-4 text-slate-400">
                We are preparing high-quality notes for this subject. Until the verified files are available, you can still use the syllabus and PYQ sections for revision.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">Syllabus</p>
                  <p className="mt-2 text-lg font-semibold text-white">Verified GTU PDF</p>
                </div>
                <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">PYQ archive</p>
                  <p className="mt-2 text-lg font-semibold text-white">Available</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
              <h3 className="text-2xl font-semibold text-white">Planned note sections</h3>
              <p className="mt-3 text-slate-400">
                These sections are part of the upcoming notes release for the subject.
              </p>

              <div className="mt-6 space-y-4">
                {placeholderChapters.map((chapter) => (
                  <div key={chapter.number} className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white">Chapter {chapter.number}</p>
                        <p className="mt-1 text-sm text-slate-400">{chapter.title}</p>
                      </div>
                      <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                        Coming soon
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
              <h3 className="text-xl font-semibold text-white">Next steps</h3>
              <div className="mt-5 space-y-4">
                <a
                  href={subject.syllabusPdf}
                  className="block rounded-3xl border border-slate-800 bg-slate-950/70 px-5 py-4 text-sm text-slate-200 transition hover:border-indigo-500"
                >
                  Open syllabus PDF
                </a>
                {subject.pyqSlug ? (
                  <Link
                    href={`/pyq/${subject.pyqSlug}`}
                    className="block rounded-3xl border border-slate-800 bg-slate-950/70 px-5 py-4 text-sm text-slate-200 transition hover:border-indigo-500"
                  >
                    Review PYQ papers
                  </Link>
                ) : null}
                <Link
                  href={`/semester/${subject.semester}`}
                  className="block rounded-3xl border border-slate-800 bg-slate-950/70 px-5 py-4 text-sm text-slate-200 transition hover:border-indigo-500"
                >
                  Browse semester resources
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
              <h3 className="text-xl font-semibold text-white">Why use notes later?</h3>
              <p className="mt-4 text-slate-400">
                Verified notes are more reliable than incomplete downloads. We only publish this page once the material is checked and accurate.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

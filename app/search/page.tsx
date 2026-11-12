import type { Metadata } from "next";
import GlobalSearch from "@/components/GlobalSearch";
import { buildSearchIndex } from "@/lib/search/search-data";

export const metadata: Metadata = {
  title: "Search Study Resources",
  description:
    "Search GTU subjects, previous year papers, notes, syllabus PDFs, and MCQ practice.",
  robots: {
    index: false,
    follow: true,
  },
};

type SearchPageProps = {
  searchParams?: {
    q?: string | string[];
  };
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = Array.isArray(searchParams?.q)
    ? searchParams.q[0] ?? ""
    : searchParams?.q ?? "";

  return (
    <main className="min-h-[70vh] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
          GTU Student Hub
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Search study resources
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          Find subjects and verified links to the notes pages, question papers, syllabus PDFs,
          and MCQ practice in the catalog.
        </p>
        <div className="mt-7">
          <GlobalSearch
            items={buildSearchIndex()}
            mode="results"
            initialQuery={query}
          />
        </div>
      </div>
    </main>
  );
}

import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import HomeSections, {
  type HomepageResource,
  type HomepageSubject,
} from "@/components/HomeSections";
import { subjectData } from "@/app/pyq/_data/subjects";
import { buildSearchIndex } from "@/lib/search/search-data";

const curatedSubjects: HomepageSubject[] = Object.entries(subjectData)
  .filter(([, subject]) => subject.papers.length > 0)
  .map(([slug, subject]) => ({
    slug,
    title: subject.title,
    code: /^\d+$/.test(subject.code) ? subject.code : "",
    semester: subject.semester,
  }));

const sessionOrder: Record<string, number> = {
  Winter: 2,
  Summer: 1,
};

const recentResources: HomepageResource[] = Object.values(subjectData)
  .flatMap((subject) =>
    subject.papers.map((paper) => ({
      title: paper.title,
      subject: subject.title,
      semester: subject.semester,
      type: "Previous year question paper",
      year: paper.year,
      term: paper.type,
      href: paper.pdf,
    })),
  )
  .filter((resource) =>
    /^\d{4}$/.test(resource.year) &&
    (resource.term === "Summer" || resource.term === "Winter") &&
    existsSync(join(process.cwd(), "public", resource.href.replace(/^\/+/, ""))),
  )
  .sort(
    (first, second) =>
      Number(second.year) - Number(first.year) ||
      (sessionOrder[second.term] ?? 0) - (sessionOrder[first.term] ?? 0),
  )
  .slice(0, 4)

const searchItems = buildSearchIndex();

export const metadata: Metadata = {
  title: {
    absolute: "GTU Student Hub | Notes, PYQs, MCQ Practice & Syllabus",
  },
  description:
    "Find GTU semester notes, previous year question papers, syllabus PDFs, and MCQ practice in one student-friendly study hub.",
  openGraph: {
    title: "GTU Student Hub | Notes, PYQs, MCQ Practice & Syllabus",
    description:
      "Find GTU semester notes, previous year question papers, syllabus PDFs, and MCQ practice in one student-friendly study hub.",
    url: "https://gtustudenthub.vercel.app",
    siteName: "GTU Student Hub",
    type: "website",
    images: ["/image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTU Student Hub | Notes, PYQs, MCQ Practice & Syllabus",
    description:
      "Find GTU semester notes, previous year question papers, syllabus PDFs, and MCQ practice in one student-friendly study hub.",
    images: ["/image.png"],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white antialiased selection:bg-indigo-500/40">
      <main>
        <HomeHero subjects={curatedSubjects} searchItems={searchItems} />
        <HomeSections subjects={curatedSubjects} recentResources={recentResources} />
      </main>
      <Footer />
    </div>
  );
}

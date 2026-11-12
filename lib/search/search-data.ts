import { existsSync } from "node:fs";
import { join } from "node:path";
import { subjectPageData } from "@/app/subject/_data/subjects";
import { subjectData } from "@/app/pyq/_data/subjects";
import { ipdcMcqData } from "@/lib/ipdc/mcqs";

export type SearchResourceType =
  | "Semester"
  | "Subject"
  | "PYQ"
  | "Notes"
  | "Syllabus"
  | "MCQ";

export type SearchItem = {
  id: string;
  type: SearchResourceType;
  title: string;
  subjectName: string;
  subjectCode: string;
  semester: number | null;
  url: string;
  subjectSlug?: string;
  status?: string;
};

function publicFileExists(url: string) {
  if (!url.startsWith("/") || url.startsWith("//")) return false;
  return existsSync(join(process.cwd(), "public", url.replace(/^\/+/, "")));
}

function appPageExists(path: string) {
  return existsSync(join(process.cwd(), "app", path, "page.tsx"));
}

export function buildSearchIndex(): SearchItem[] {
  const subjects = Object.entries(subjectPageData).map(([slug, subject]) => ({
    slug,
    title: subject.title,
    code: subject.code,
    semester: subject.semester,
    url: `/subject/${slug}`,
  }));
  const knownSlugs = new Set(subjects.map((subject) => subject.slug));

  for (const [slug, subject] of Object.entries(subjectData)) {
    if (knownSlugs.has(slug)) continue;
    subjects.push({
      slug,
      title: subject.title,
      code: subject.code,
      semester: subject.semester,
      url: `/pyq/${slug}`,
    });
  }

  const searchItems: SearchItem[] = subjects.map((subject) => ({
    id: `subject-${subject.slug}`,
    type: "Subject",
    title: subject.title,
    subjectName: subject.title,
    subjectCode: subject.code,
    semester: subject.semester,
    url: subject.url,
    subjectSlug: subject.slug,
  }));

  for (const [slug, subject] of Object.entries(subjectData)) {
    const pageSubject = subjectPageData[slug];
    for (const paper of subject.papers) {
      if (
        (paper.type !== "Summer" && paper.type !== "Winter") ||
        !publicFileExists(paper.pdf)
      ) {
        continue;
      }
      searchItems.push({
        id: `pyq-${slug}-${paper.year}-${paper.type}-${paper.title}`,
        type: "PYQ",
        title: paper.title,
        subjectName: pageSubject?.title ?? subject.title,
        subjectCode: pageSubject?.code ?? subject.code,
        semester: pageSubject?.semester ?? subject.semester,
        url: paper.pdf,
        subjectSlug: slug,
      });
    }

    if (!pageSubject && appPageExists(join("notes", slug))) {
      searchItems.push({
        id: `notes-${slug}`,
        type: "Notes",
        title: `${subject.title} Notes`,
        subjectName: subject.title,
        subjectCode: subject.code,
        semester: subject.semester,
        url: `/notes/${slug}`,
        subjectSlug: slug,
      });
    }
  }

  for (const subject of Object.values(subjectPageData)) {
    if (
      subject.notesSlug &&
      subject.notesStatus !== "not-applicable"
    ) {
      searchItems.push({
        id: `notes-${subject.slug}`,
        type: "Notes",
        title: `${subject.title} Notes`,
        subjectName: subject.title,
        subjectCode: subject.code,
        semester: subject.semester,
        url: `/notes/${subject.notesSlug}`,
        subjectSlug: subject.slug,
        status:
          subject.notesStatus === "coming-soon"
            ? "Notes page under preparation"
            : undefined,
      });
    }

    if (publicFileExists(subject.syllabusPdf)) {
      searchItems.push({
        id: `syllabus-${subject.slug}`,
        type: "Syllabus",
        title: `${subject.title} Syllabus PDF`,
        subjectName: subject.title,
        subjectCode: subject.code,
        semester: subject.semester,
        url: subject.syllabusPdf,
        subjectSlug: subject.slug,
      });
    }
  }

  for (const [slug, subject] of Object.entries(subjectData)) {
    const syllabusUrl = `/pdfs/syllabus/${slug}-syllabus.pdf`;
    if (subjectPageData[slug] || !publicFileExists(syllabusUrl)) continue;
    searchItems.push({
      id: `syllabus-${slug}`,
      type: "Syllabus",
      title: `${subject.title} Syllabus PDF`,
      subjectName: subject.title,
      subjectCode: subject.code,
      semester: subject.semester,
      url: syllabusUrl,
      subjectSlug: slug,
    });
  }

  const ipdcSubject = subjectPageData["ipdc-1"] ?? subjectData["ipdc-1"];
  for (const test of Object.values(ipdcMcqData)) {
    searchItems.push({
      id: `mcq-${test.slug}`,
      type: "MCQ",
      title: test.title,
      subjectName: ipdcSubject?.title ?? "IPDC",
      subjectCode: ipdcSubject?.code ?? "",
      semester: ipdcSubject?.semester ?? null,
      url: `/test/ipdc/${encodeURIComponent(test.slug)}`,
      subjectSlug: "ipdc-1",
    });
  }

  searchItems.push({
    id: "mcq-ipdc-library",
    type: "MCQ",
    title: "IPDC MCQ Test Library",
    subjectName: ipdcSubject?.title ?? "IPDC",
    subjectCode: ipdcSubject?.code ?? "",
    semester: ipdcSubject?.semester ?? null,
    url: "/test/ipdc",
    subjectSlug: "ipdc-1",
  });

  for (let semester = 1; semester <= 8; semester += 1) {
    searchItems.push({
      id: `semester-${semester}`,
      type: "Semester",
      title: `Semester ${semester}`,
      subjectName: "All subjects",
      subjectCode: "",
      semester,
      url: `/semester/${semester}`,
    });
  }

  return searchItems;
}

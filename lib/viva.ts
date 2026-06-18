import { dataVisualizationViva } from "@/lib/viva/data-visualization-viva";
import { webProgrammingViva } from "@/lib/viva/web-programming-viva";

export interface VivaChapterData {
  chapterNumber: number;
  chapterName: string;
  questions: Array<{ question: string; answer: string }>;
  mcqs: Array<{ question: string; options: string[]; correctAnswer: string }>;
}

export const getVivaData = (slug: string): VivaChapterData[] => {
  switch (slug) {
    case "web-programming":
      return webProgrammingViva;
    case "data-visualization":
      return dataVisualizationViva;
    default:
      return [];
  }
};

export interface VivaChapter {
  id: string;
  slug: string;
  title: string;
  summary?: string;
}

export interface VivaQuestion {
  id: string;
  chapterSlug: string;
  type: "conceptual" | "practical" | "definition" | "analysis";
  question: string;
  answer?: string;
}

export interface VivaMcq {
  id: string;
  chapterSlug: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
}

export interface VivaSubject {
  slug: string;
  title: string;
  semester: number;
  code?: string;
  description: string;
  chapters: VivaChapter[];
  vivaQuestions: VivaQuestion[];
  vivaMcqs: VivaMcq[];
}

export const vivaSubjects: Record<string, VivaSubject> = {
  "software-engineering": {
    slug: "software-engineering",
    title: "Software Engineering",
    semester: 5,
    description:
      "Subject-level viva preparation for oral and MCQ revision in GTU Semester 5.",
    chapters: [],
    vivaQuestions: [],
    vivaMcqs: [],
  },
  "computer-networks": {
    slug: "computer-networks",
    title: "Computer Networks",
    semester: 5,
    description:
      "Oral question prompts and MCQ practice for Computer Networks.",
    chapters: [],
    vivaQuestions: [],
    vivaMcqs: [],
  },
  "web-programming": {
    slug: "web-programming",
    title: "Web Programming",
    semester: 6,
    code: "3160713",
    description:
      "Viva questions and objective practice for the Web Programming subject.",
    chapters: [
      { id: "web-01", slug: "chapter-01", title: "Introduction to WEB" },
      { id: "web-02", slug: "chapter-02", title: "Web Design" },
      { id: "web-03", slug: "chapter-03", title: "Basics of HTML and CSS" },
      { id: "web-04", slug: "chapter-04", title: "Client Side Scripting using JavaScript" },
      { id: "web-05", slug: "chapter-05", title: "Server Side Programming with PHP" },
      { id: "web-06", slug: "chapter-06", title: "Database programming with PHP and MySQL" },
      { id: "web-07", slug: "chapter-07", title: "Advanced Web Programming concepts" },
    ],
    vivaQuestions: Array.from({ length: 140 }, (_, index) => ({
      id: `webq-${index + 1}`,
      chapterSlug: `chapter-0${Math.floor(index / 20) + 1}`,
      type: "analysis",
      question: `Placeholder viva question ${index + 1}`,
    })),
    vivaMcqs: Array.from({ length: 140 }, (_, index) => ({
      id: `webm-${index + 1}`,
      chapterSlug: `chapter-0${Math.floor(index / 20) + 1}`,
      question: `Placeholder MCQ question ${index + 1}`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctOptionIndex: 0,
    })),
  },
  "data-visualization": {
    slug: "data-visualization",
    title: "Data Visualization",
    semester: 6,
    code: "3160717",
    description:
      "Viva questions and MCQ practice for the Data Visualization subject.",
    chapters: [
      { id: "dv-01", slug: "chapter-01", title: "Introduction to Data Visualization" },
      { id: "dv-02", slug: "chapter-02", title: "Basics of Data Visualization - Tables" },
      { id: "dv-03", slug: "chapter-03", title: "Visualizing data Programmatically" },
      { id: "dv-04", slug: "chapter-04", title: "Introduction to D3.js" },
      { id: "dv-05", slug: "chapter-05", title: "Advanced Data Visualization" },
      { id: "dv-06", slug: "chapter-06", title: "Information Dashboard Design" },
    ],
    vivaQuestions: [],
    vivaMcqs: [],
  },
};

export const getVivaSubject = (slug: string) => vivaSubjects[slug];

export const getVivaStaticParams = () =>
  Object.values(vivaSubjects).map((subject) => ({
    semester: String(subject.semester),
    subject: subject.slug,
  }));

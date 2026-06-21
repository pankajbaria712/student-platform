import { dataVisualizationViva } from "@/lib/viva/data-visualization-viva";
import { webProgrammingViva } from "@/lib/viva/web-programming-viva";
import { ipdc2Viva } from "@/lib/viva/ipdc-2-viva";
import { iotAndApplicationsViva } from "@/lib/viva/iot-and-applications-viva";
import { advanceJavaProgrammingViva } from "@/lib/viva/advance-java-programming-viva";

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
    case "advanced-java-programming":
      return advanceJavaProgrammingViva;
    case "data-visualization":
      return dataVisualizationViva;
    case "ipdc-2":
    case "ipdc-course":
      return ipdc2Viva;
    case "iot-and-applications":
    case "iot-applications":
      return iotAndApplicationsViva;
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

const buildVivaSubject = (
  slug: string,
  title: string,
  code: string | undefined,
  description: string,
  data: VivaChapterData[]
): VivaSubject => ({
  slug,
  title,
  semester: 6,
  code,
  description,
  chapters: data.map((c) => ({
    id: `${slug}-${String(c.chapterNumber).padStart(2, "0")}`,
    slug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
    title: c.chapterName,
  })),
  vivaQuestions: data.flatMap((c) =>
    (c.questions || []).map((q, idx) => ({
      id: `${slug}q-${c.chapterNumber}-${idx + 1}`,
      chapterSlug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
      type: "analysis",
      question: q.question,
      answer: q.answer,
    }))
  ),
  vivaMcqs: data.flatMap((c) =>
    (c.mcqs || []).map((m, idx) => ({
      id: `${slug}m-${c.chapterNumber}-${idx + 1}`,
      chapterSlug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
      question: m.question,
      options: m.options,
      correctOptionIndex: ((): number => {
        const idx = m.options.findIndex((o) => o === m.correctAnswer);
        return idx === -1 ? 0 : idx;
      })(),
    }))
  ),
});

const ipdcVivaSubject = buildVivaSubject(
  "ipdc-2",
  "Integrated Personality Development Course-II",
  "3160001",
  "Viva questions and MCQ practice for Integrated Personality Development Course-II.",
  ipdc2Viva
);

const ipdcCourseVivaSubject: VivaSubject = {
  ...ipdcVivaSubject,
  slug: "ipdc-course",
};

const iotVivaSubject = buildVivaSubject(
  "iot-and-applications",
  "IOT & Applications",
  "3160716",
  "Viva questions and MCQ practice for IOT & Applications.",
  iotAndApplicationsViva
);

const iotApplicationsVivaSubject: VivaSubject = {
  ...iotVivaSubject,
  slug: "iot-applications",
};

const advancedJavaVivaSubject = buildVivaSubject(
  "advanced-java-programming",
  "Advanced Java Programming",
  "3160707",
  "Viva questions and MCQ practice for Advanced Java Programming.",
  advanceJavaProgrammingViva
);

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
  "advanced-java-programming": advancedJavaVivaSubject,
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
  "ipdc-2": {
    slug: "ipdc-2",
    title: "Integrated Personality Development Course-II",
    semester: 6,
    code: "3160001",
    description: "Viva questions and MCQ practice for Integrated Personality Development Course-II.",
    chapters: ipdc2Viva.map((c) => ({
      id: `ipdc-2-${String(c.chapterNumber).padStart(2, "0")}`,
      slug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
      title: c.chapterName,
    })),
    vivaQuestions: ipdc2Viva.flatMap((c) =>
      (c.questions || []).map((q, idx) => ({
        id: `ipdcq-${c.chapterNumber}-${idx + 1}`,
        chapterSlug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
        type: "analysis",
        question: q.question,
        answer: q.answer,
      }))
    ),
    vivaMcqs: ipdc2Viva.flatMap((c) =>
      (c.mcqs || []).map((m, idx) => ({
        id: `ipdcm-${c.chapterNumber}-${idx + 1}`,
        chapterSlug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
        question: m.question,
        options: m.options,
        correctOptionIndex: ((): number => {
          const idx = m.options.findIndex((o) => o === m.correctAnswer);
          return idx === -1 ? 0 : idx;
        })(),
      }))
    ),
  },
  "ipdc-course": {
    // Alias for subject listings that generate 'ipdc-course' slug from subject name
    slug: "ipdc-course",
    title: "Integrated Personality Development Course-II",
    semester: 6,
    code: "3160001",
    description: "Viva questions and MCQ practice for Integrated Personality Development Course-II.",
    chapters: ipdc2Viva.map((c) => ({
      id: `ipdc-2-${String(c.chapterNumber).padStart(2, "0")}`,
      slug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
      title: c.chapterName,
    })),
    vivaQuestions: ipdc2Viva.flatMap((c) =>
      (c.questions || []).map((q, idx) => ({
        id: `ipdcq-${c.chapterNumber}-${idx + 1}`,
        chapterSlug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
        type: "analysis",
        question: q.question,
        answer: q.answer,
      }))
    ),
    vivaMcqs: ipdc2Viva.flatMap((c) =>
      (c.mcqs || []).map((m, idx) => ({
        id: `ipdcm-${c.chapterNumber}-${idx + 1}`,
        chapterSlug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
        question: m.question,
        options: m.options,
        correctOptionIndex: ((): number => {
          const idx = m.options.findIndex((o) => o === m.correctAnswer);
          return idx === -1 ? 0 : idx;
        })(),
      }))
    ),
  },
  "iot-and-applications": {
    slug: "iot-and-applications",
    title: "IOT & Applications",
    semester: 6,
    code: "3160716",
    description: "Viva questions and MCQ practice for IOT & Applications.",
    chapters: iotAndApplicationsViva.map((c) => ({
      id: `iot-${String(c.chapterNumber).padStart(2, "0")}`,
      slug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
      title: c.chapterName,
    })),
    vivaQuestions: iotAndApplicationsViva.flatMap((c) =>
      (c.questions || []).map((q, idx) => ({
        id: `iotq-${c.chapterNumber}-${idx + 1}`,
        chapterSlug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
        type: "analysis",
        question: q.question,
        answer: q.answer,
      }))
    ),
    vivaMcqs: iotAndApplicationsViva.flatMap((c) =>
      (c.mcqs || []).map((m, idx) => ({
        id: `iotm-${c.chapterNumber}-${idx + 1}`,
        chapterSlug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
        question: m.question,
        options: m.options,
        correctOptionIndex: ((): number => {
          const idx = m.options.findIndex((o) => o === m.correctAnswer);
          return idx === -1 ? 0 : idx;
        })(),
      }))
    ),
  },
  "iot-applications": {
    slug: "iot-applications",
    title: "IOT & Applications",
    semester: 6,
    code: "3160716",
    description: "Viva questions and MCQ practice for IOT & Applications.",
    chapters: iotAndApplicationsViva.map((c) => ({
      id: `iot-${String(c.chapterNumber).padStart(2, "0")}`,
      slug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
      title: c.chapterName,
    })),
    vivaQuestions: iotAndApplicationsViva.flatMap((c) =>
      (c.questions || []).map((q, idx) => ({
        id: `iotq-${c.chapterNumber}-${idx + 1}`,
        chapterSlug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
        type: "analysis",
        question: q.question,
        answer: q.answer,
      }))
    ),
    vivaMcqs: iotAndApplicationsViva.flatMap((c) =>
      (c.mcqs || []).map((m, idx) => ({
        id: `iotm-${c.chapterNumber}-${idx + 1}`,
        chapterSlug: `chapter-${String(c.chapterNumber).padStart(2, "0")}`,
        question: m.question,
        options: m.options,
        correctOptionIndex: ((): number => {
          const idx = m.options.findIndex((o) => o === m.correctAnswer);
          return idx === -1 ? 0 : idx;
        })(),
      }))
    ),
  },
};

export const getVivaSubject = (slug: string) => vivaSubjects[slug];

export const getVivaStaticParams = () =>
  Object.values(vivaSubjects).map((subject) => ({
    semester: String(subject.semester),
    subject: subject.slug,
  }));

import { dataVisualizationViva } from "@/lib/viva/data-visualization-viva";
import { webProgrammingViva } from "@/lib/viva/web-programming-viva";
import { ipdc2Viva } from "@/lib/viva/ipdc-2-viva";
import { iotAndApplicationsViva } from "@/lib/viva/iot-and-applications-viva";
import { advanceJavaProgrammingViva } from "@/lib/viva/advance-java-programming-viva";
import { microprocessorAndInterfacingViva } from "@/lib/viva/microprocessor-and-interfacing-viva";
import { theoryOfComputationViva } from "@/lib/viva/theory-of-computation-viva";
import { dataMiningViva } from "@/lib/viva/data-mining-viva";
import { gtuSoftwareEngineeringViva } from "@/lib/viva/software-engineering-viva";
import { gtuComputerNetworksViva } from "@/lib/viva/computer-networks-viva";
import { gtuPythonForDataScienceViva } from "@/lib/viva/python-for-data-science-viva";
import { gtuAnalysisAndDesignOfAlgorithmsViva } from "@/lib/viva/analysis-and-design-of-algorithms-viva";
import { gtuProfessionalEthicsViva } from "@/lib/viva/professional-ethics-viva";
import { gtuIpdc1Viva } from "@/lib/viva/ipdc-1-viva";
// Semester 7 viva data imports
import { gtuCompilerDesignViva } from "@/lib/viva/compiler-design-viva";
import { gtuMobileComputingAndWirelessCommunicationViva } from "@/lib/viva/mobile-computing-and-wireless-communication-viva";
import { gtuArtificialIntelligenceViva } from "@/lib/viva/artificial-intelligence-viva";
import { cloudComputingVivaData } from "@/lib/viva/cloud-computing-viva";
// require used for these two modules due to resolution differences
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { informationRetrievalVivaData } = require("./viva/information-retrieval-viva");
import { distributedSystemVivaData } from "@/lib/viva/distributed-system-viva";
import { gtuInformationSecurityViva } from "@/lib/viva/information-security-viva";
import { gtuParallelAndDistributedComputingViva } from "@/lib/viva/parallel-and-distributed-computing-viva";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { gtuBigDataAnalyticsViva } = require("./viva/big-data-analytics-viva");
import { gtuNaturalLanguageProcessingViva } from "@/lib/viva/natural-language-processing-viva";
import { gtuMachineLearningViva } from "@/lib/viva/machine-learning-viva";
import { gtuDigitalForensicsViva } from "@/lib/viva/digital-forensics-viva";
import { gtuMobileApplicationDevelopmentViva } from "@/lib/viva/mobile-application-development-viva";

export interface VivaChapterData {
  chapterNumber: number;
  chapterName: string;
  questions: Array<{ question: string; answer: string }>;
  mcqs: Array<{ question: string; options: string[]; correctAnswer: string }>;
}

const transformSoftwareEngineeringViva = (): VivaChapterData[] =>
  gtuSoftwareEngineeringViva.chapters.map((chapter) => ({
    chapterNumber: chapter.chapterNumber,
    chapterName: chapter.chapterName,
    questions: chapter.vivaQuestions.map((q) => ({ question: q.question, answer: q.answer })),
    mcqs: chapter.mcqs.map((m) => ({
      question: m.question,
      options: m.options,
      correctAnswer: m.answer,
    })),
  }));

const transformComputerNetworksViva = (): VivaChapterData[] =>
  gtuComputerNetworksViva.chapters.map((chapter) => ({
    chapterNumber: chapter.chapterNumber,
    chapterName: chapter.chapterName,
    questions: chapter.vivaQuestions.map((q) => ({ question: q.question, answer: q.answer })),
    mcqs: chapter.mcqs.map((m) => ({
      question: m.question,
      options: m.options,
      correctAnswer: m.answer,
    })),
  }));

const transformPythonForDataScienceViva = (): VivaChapterData[] =>
  gtuPythonForDataScienceViva.chapters.map((chapter) => ({
    chapterNumber: chapter.chapterNumber,
    chapterName: chapter.chapterName,
    questions: chapter.vivaQuestions.map((q) => ({ question: q.question, answer: q.answer })),
    mcqs: chapter.mcqs.map((m) => ({
      question: m.question,
      options: m.options,
      correctAnswer: m.answer,
    })),
  }));

const transformAnalysisAndDesignOfAlgorithmsViva = (): VivaChapterData[] =>
  gtuAnalysisAndDesignOfAlgorithmsViva.chapters.map((chapter) => ({
    chapterNumber: chapter.chapterNumber,
    chapterName: chapter.chapterName,
    questions: chapter.vivaQuestions.map((q) => ({ question: q.question, answer: q.answer })),
    mcqs: chapter.mcqs.map((m) => ({
      question: m.question,
      options: m.options,
      correctAnswer: m.answer,
    })),
  }));

const transformProfessionalEthicsViva = (): VivaChapterData[] =>
  gtuProfessionalEthicsViva.chapters.map((chapter) => ({
    chapterNumber: chapter.chapterNumber,
    chapterName: chapter.chapterName,
    questions: chapter.vivaQuestions.map((q) => ({ question: q.question, answer: q.answer })),
    mcqs: chapter.mcqs.map((m) => ({
      question: m.question,
      options: m.options,
      correctAnswer: m.answer,
    })),
  }));

const transformIpdc1Viva = (): VivaChapterData[] =>
  gtuIpdc1Viva.chapters.map((chapter) => ({
    chapterNumber: chapter.chapterNumber,
    chapterName: chapter.chapterName,
    questions: chapter.vivaQuestions.map((q) => ({ question: q.question, answer: q.answer })),
    mcqs: chapter.mcqs.map((m) => ({
      question: m.question,
      options: m.options,
      correctAnswer: m.answer,
    })),
  }));

// Generic normalizers for Semester 7 viva data which come in a few shapes.
const normalizeSubjectDataFromObject = (subject: any): VivaChapterData[] =>
  (subject?.chapters || []).map((c: any) => ({
    chapterNumber: c.chapterNumber,
    chapterName: c.chapterName,
    questions: (c.vivaQuestions || c.questions || []).map((q: any) => ({ question: q.question, answer: q.answer })),
    mcqs: (c.mcqs || []).map((m: any) => ({ question: m.question, options: m.options || [], correctAnswer: m.answer ?? m.correctAnswer })),
  }));

const normalizeSubjectDataFromArray = (arr: any[]): VivaChapterData[] =>
  (arr || []).map((c: any, idx: number) => ({
    chapterNumber: c.chapterNumber ?? idx + 1,
    chapterName: c.chapterName ?? c.chapterTitle ?? `Chapter ${idx + 1}`,
    questions: (c.vivaQuestions || c.questions || []).map((q: any) => ({ question: q.question, answer: q.answer })),
    mcqs: (c.mcqs || []).map((m: any) => ({ question: m.question, options: m.options || [], correctAnswer: m.answer ?? m.correctAnswer })),
  }));

// Prepare Semester 7 viva arrays
const compilerDesignViva = normalizeSubjectDataFromObject(gtuCompilerDesignViva);
const mobileComputingViva = normalizeSubjectDataFromObject(gtuMobileComputingAndWirelessCommunicationViva);
const artificialIntelligenceViva = normalizeSubjectDataFromObject(gtuArtificialIntelligenceViva);
const cloudComputingViva = normalizeSubjectDataFromArray(cloudComputingVivaData);
const informationRetrievalViva = normalizeSubjectDataFromArray(informationRetrievalVivaData);
const distributedSystemViva = normalizeSubjectDataFromArray(distributedSystemVivaData);
const informationSecurityViva = normalizeSubjectDataFromObject(gtuInformationSecurityViva);
const parallelAndDistributedComputingViva = normalizeSubjectDataFromObject(gtuParallelAndDistributedComputingViva);
const bigDataAnalyticsViva = normalizeSubjectDataFromObject(gtuBigDataAnalyticsViva);
const nlpViva = normalizeSubjectDataFromObject(gtuNaturalLanguageProcessingViva);
const machineLearningViva = normalizeSubjectDataFromObject(gtuMachineLearningViva);
const digitalForensicsViva = normalizeSubjectDataFromObject(gtuDigitalForensicsViva);
const mobileAppDevViva = normalizeSubjectDataFromObject(gtuMobileApplicationDevelopmentViva);

export const getVivaData = (slug: string): VivaChapterData[] => {
  switch (slug) {
    case "web-programming":
      return webProgrammingViva;
    case "software-engineering":
      return transformSoftwareEngineeringViva();
    case "computer-networks":
      return transformComputerNetworksViva();
    case "python-for-data-science":
      return transformPythonForDataScienceViva();
    case "analysis-and-design-of-algorithms":
      return transformAnalysisAndDesignOfAlgorithmsViva();
    case "professional-ethics":
      return transformProfessionalEthicsViva();
    case "ipdc-1":
      return transformIpdc1Viva();
    case "advanced-java-programming":
      return advanceJavaProgrammingViva;
    case "microprocessor-and-interfacing":
    case "microprocessor-interfacing":
      return microprocessorAndInterfacingViva;
    case "theory-of-computation":
      return theoryOfComputationViva;
    case "data-mining":
      return dataMiningViva;
    case "data-visualization":
      return dataVisualizationViva;
    // Semester 7 subjects
    case "compiler-design":
      return compilerDesignViva;
    case "mobile-computing-and-wireless-communication":
      return mobileComputingViva;
    case "artificial-intelligence":
      return artificialIntelligenceViva;
    case "cloud-computing":
      return cloudComputingViva;
    case "information-retrieval":
      return informationRetrievalViva;
    case "distributed-system":
      return distributedSystemViva;
    case "information-security":
      return informationSecurityViva;
    case "parallel-and-distributed-computing":
      return parallelAndDistributedComputingViva;
    case "big-data-analytics":
      return bigDataAnalyticsViva;
    case "natural-language-processing":
      return nlpViva;
    case "machine-learning":
      return machineLearningViva;
    case "digital-forensics":
      return digitalForensicsViva;
    case "mobile-application-development":
      return mobileAppDevViva;
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
  data: VivaChapterData[],
  semester: number = 6
): VivaSubject => ({
  slug,
  title,
  semester,
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

const softwareEngineeringVivaSubject = buildVivaSubject(
  "software-engineering",
  "Software Engineering",
  "3150711",
  "Viva questions and MCQ practice for Software Engineering.",
  transformSoftwareEngineeringViva(),
  5
);

const computerNetworksVivaSubject = buildVivaSubject(
  "computer-networks",
  "Computer Networks",
  "3150710",
  "Viva questions and MCQ practice for Computer Networks.",
  transformComputerNetworksViva(),
  5
);

const pythonForDataScienceVivaSubject = buildVivaSubject(
  "python-for-data-science",
  "Python for Data Science",
  "3150713",
  "Viva questions and MCQ practice for Python for Data Science.",
  transformPythonForDataScienceViva(),
  5
);

const analysisAndDesignOfAlgorithmsVivaSubject = buildVivaSubject(
  "analysis-and-design-of-algorithms",
  "Analysis and Design of Algorithms",
  "3150703",
  "Viva questions and MCQ practice for Analysis and Design of Algorithms.",
  transformAnalysisAndDesignOfAlgorithmsViva(),
  5
);

const professionalEthicsVivaSubject = buildVivaSubject(
  "professional-ethics",
  "Professional Ethics",
  "3150709",
  "Viva questions and MCQ practice for Professional Ethics.",
  transformProfessionalEthicsViva(),
  5
);

const ipdc1VivaSubject = buildVivaSubject(
  "ipdc-1",
  "Integrated Personality Development Course - I",
  "3150005",
  "Viva questions and MCQ practice for IPDC-1.",
  transformIpdc1Viva(),
  5
);

const advancedJavaVivaSubject = buildVivaSubject(
  "advanced-java-programming",
  "Advanced Java Programming",
  "3160707",
  "Viva questions and MCQ practice for Advanced Java Programming.",
  advanceJavaProgrammingViva
);

const microprocessorVivaSubject = buildVivaSubject(
  "microprocessor-and-interfacing",
  "Microprocessor & Interfacing",
  "3160710",
  "Viva questions and MCQ practice for Microprocessor and Interfacing.",
  microprocessorAndInterfacingViva
);

const theoryOfComputationVivaSubject = buildVivaSubject(
  "theory-of-computation",
  "Theory of Computation",
  "3160704",
  "Viva questions and MCQs for Theory of Computation.",
  theoryOfComputationViva
);

const dataMiningVivaSubject = buildVivaSubject(
  "data-mining",
  "Data Mining",
  "3160714",
  "Viva questions and MCQs for Data Mining.",
  dataMiningViva
);

export const vivaSubjects: Record<string, VivaSubject> = {
  "software-engineering": softwareEngineeringVivaSubject,
  "computer-networks": computerNetworksVivaSubject,
  "python-for-data-science": pythonForDataScienceVivaSubject,
  "analysis-and-design-of-algorithms": analysisAndDesignOfAlgorithmsVivaSubject,
  "professional-ethics": professionalEthicsVivaSubject,
  "ipdc-1": ipdc1VivaSubject,
  "theory-of-computation": theoryOfComputationVivaSubject,
  "data-mining": dataMiningVivaSubject,
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
  "microprocessor-and-interfacing": microprocessorVivaSubject,
  "microprocessor-interfacing": microprocessorVivaSubject,
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
  // Semester 7 subjects
  "compiler-design": buildVivaSubject(
    "compiler-design",
    "Compiler Design",
    "3170701",
    "Viva questions and MCQ practice for Compiler Design.",
    compilerDesignViva,
    7
  ),
  "mobile-computing-and-wireless-communication": buildVivaSubject(
    "mobile-computing-and-wireless-communication",
    "Mobile Computing and Wireless Communication",
    "3170710",
    "Viva questions and MCQ practice for Mobile Computing and Wireless Communication.",
    mobileComputingViva,
    7
  ),
  "artificial-intelligence": buildVivaSubject(
    "artificial-intelligence",
    "Artificial Intelligence",
    "3170716",
    "Viva questions and MCQ practice for Artificial Intelligence.",
    artificialIntelligenceViva,
    7
  ),
  "cloud-computing": buildVivaSubject(
    "cloud-computing",
    "Cloud Computing",
    "3170717",
    "Viva questions and MCQ practice for Cloud Computing.",
    cloudComputingViva,
    7
  ),
  "information-retrieval": buildVivaSubject(
    "information-retrieval",
    "Information Retrieval",
    "3170718",
    "Viva questions and MCQ practice for Information Retrieval.",
    informationRetrievalViva,
    7
  ),
  "distributed-system": buildVivaSubject(
    "distributed-system",
    "Distributed System",
    "3170719",
    "Viva questions and MCQ practice for Distributed System.",
    distributedSystemViva,
    7
  ),
  "information-security": buildVivaSubject(
    "information-security",
    "Information Security",
    "3170720",
    "Viva questions and MCQ practice for Information Security.",
    informationSecurityViva,
    7
  ),
  "parallel-and-distributed-computing": buildVivaSubject(
    "parallel-and-distributed-computing",
    "Parallel and Distributed Computing",
    "3170721",
    "Viva questions and MCQ practice for Parallel and Distributed Computing.",
    parallelAndDistributedComputingViva,
    7
  ),
  "big-data-analytics": buildVivaSubject(
    "big-data-analytics",
    "Big Data Analytics",
    "3170722",
    "Viva questions and MCQ practice for Big Data Analytics.",
    bigDataAnalyticsViva,
    7
  ),
  "natural-language-processing": buildVivaSubject(
    "natural-language-processing",
    "Natural Language Processing",
    "3170723",
    "Viva questions and MCQ practice for Natural Language Processing.",
    nlpViva,
    7
  ),
  "machine-learning": buildVivaSubject(
    "machine-learning",
    "Machine Learning",
    "3170724",
    "Viva questions and MCQ practice for Machine Learning.",
    machineLearningViva,
    7
  ),
  "digital-forensics": buildVivaSubject(
    "digital-forensics",
    "Digital Forensics",
    "3170725",
    "Viva questions and MCQ practice for Digital Forensics.",
    digitalForensicsViva,
    7
  ),
  "mobile-application-development": buildVivaSubject(
    "mobile-application-development",
    "Mobile Application Development",
    "3170726",
    "Viva questions and MCQ practice for Mobile Application Development.",
    mobileAppDevViva,
    7
  ),
};

export const getVivaSubject = (slug: string) => vivaSubjects[slug];

export const getVivaStaticParams = () =>
  Object.values(vivaSubjects).map((subject) => ({
    semester: String(subject.semester),
    subject: subject.slug,
  }));

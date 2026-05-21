/**
 * Canonical PYQ catalog.
 *
 * - pdf: public URL under /public/pdfs/pyq/...
 * - solutionFile: filename in Supabase bucket "premium-pdfs" (private)
 */
export type Paper = {
  title: string;
  code: string;
  year: string;
  type: "Summer" | "Winter" | string;
  /** e.g. /pdfs/pyq/web-programming/wp-summer-2025.pdf */
  pdf: string;
  solutionAvailable: boolean;
  /** e.g. wp-summer-2025-solution.pdf (bucket: premium-pdfs) */
  solutionFile?: string;
  /** Optional free test route slug for IPDC papers */
  testSlug?: string;
};

export type Subject = {
  title: string;
  code: string;
  semester: number;
  description: string;
  papers: Paper[];
};

export type SubjectData = Record<string, Subject>;

export const subjectData: SubjectData = {
  "effective-technical-communication": {
    title: "Effective Technical Communication",
    code: "3130004",
    semester: 3,
    description:
      "Communication strategies, technical writing, and professional presentation skills.",
    papers: [
      {
        title: "ETC Summer 2025",
        code: "3130004",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/effective-technical-communication/etc-summer-2025.pdf",
        solutionAvailable: false,
      },
    ],
  },
  "data-structures": {
    title: "Data Structures",
    code: "3130702",
    semester: 3,
    description:
      "Stack, queue, tree, and graph structures with algorithmic performance analysis.",
    papers: [
      {
        title: "DS Summer 2025",
        code: "3130702",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/data-structures/ds-summer-2025.pdf",
        solutionAvailable: false,
      },
    ],
  },
  "web-programming": {
    title: "Web Programming",
    code: "3160713",
    semester: 6,
    description:
      "Full-stack development techniques including modern frameworks and responsive design.",
    papers: [
      {
        title: "WP Summer 2025",
        code: "3160713",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/web-programming/wp-summer-2025.pdf",
        solutionAvailable: false,
        solutionFile: "wp-summer-2025-solution.pdf",
      },
      {
        title: "WP Winter 2024",
        code: "3160713",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/web-programming/wp-winter-2024.pdf",
        solutionAvailable: false,
        solutionFile: "wp-winter-2024-solution.pdf",
      },
      {
        title: "WP Summer 2024",
        code: "3160713",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/web-programming/wp-summer-2024.pdf",
        solutionAvailable: false,
        solutionFile: "wp-summer-2024-solution.pdf",
      },
      {
        title: "WP Winter 2023",
        code: "3160713",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/web-programming/wp-winter-2023.pdf",
        solutionAvailable: false,
        solutionFile: "wp-winter-2023-solution.pdf",
      },
      {
        title: "WP Summer 2023",
        code: "3160713",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/web-programming/wp-summer-2023.pdf",
        solutionAvailable: false,
        solutionFile: "wp-summer-2023-solution.pdf",
      },
    ],
  },
  "microprocessor-and-interfacing": {
    title: "Microprocessor and Interfacing",
    code: "3160710",
    semester: 6,
    description:
      "8086 microprocessor architecture, interfacing techniques, DMA, interrupts, and serial communication.",
    papers: [
      {
        title: "MPI Demo Paper",
        code: "3160710",
        year: "Demo",
        type: "Demo",
        pdf: "/pdfs/pyq/microprocessor-and-interfacing/mpi-demo.pdf",
        solutionAvailable: false,
      },
      {
        title: "MPI Winter 2025",
        code: "3160710",
        year: "2025",
        type: "Winter",
        pdf: "/pdfs/pyq/microprocessor-and-interfacing/mpi-winter-2025.pdf",
        solutionAvailable: true,
        solutionFile: "mpi-winter-2025-solution.pdf",
      },
      {
        title: "MPI Summer 2025",
        code: "3160710",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/microprocessor-and-interfacing/mpi-summer-2025.pdf",
        solutionAvailable: true,
        solutionFile: "mpi-summer-2025-solution.pdf",
      },
      {
        title: "MPI Winter 2024",
        code: "3160710",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/microprocessor-and-interfacing/mpi-winter-2024.pdf",
        solutionAvailable: true,
        solutionFile: "mpi-winter-2024-solution.pdf",
      },
      {
        title: "MPI Summer 2024",
        code: "3160710",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/microprocessor-and-interfacing/mpi-summer-2024.pdf",
        solutionAvailable: true,
        solutionFile: "mpi-summer-2024-solution.pdf",
      },
    ],
  },
  "theory-of-computation": {
    title: "Theory of Computation",
    code: "3160704",
    semester: 6,
    description:
      "Master automata theory, formal languages, and mathematical foundations of computing.",
    papers: [
      {
        title: "TOC Winter 2025",
        code: "3160704",
        year: "2025",
        type: "Winter",
        pdf: "/pdfs/pyq/theory-of-computation/toc-winter-2025.pdf",
        solutionAvailable: true,
        solutionFile: "toc-winter-2025-solution.pdf",
      },
      {
        title: "TOC Winter 2024",
        code: "3160704",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/theory-of-computation/toc-winter-2024.pdf",
        solutionAvailable: true,
        solutionFile: "toc-winter-2024-solution.pdf",
      },
      {
        title: "TOC Summer 2024",
        code: "3160704",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/theory-of-computation/toc-summer-2024.pdf",
        solutionAvailable: true,
        solutionFile: "toc-summer-2024-solution.pdf",
      },
      {
        title: "TOC Winter 2022",
        code: "3160704",
        year: "2022",
        type: "Winter",
        pdf: "/pdfs/pyq/theory-of-computation/toc-winter-2022.pdf",
        solutionAvailable: true,
        solutionFile: "toc-winter-2022-solution.pdf",
      },
    ],
  },
  "integrated-personality-development-course": {
    title: "Integrated Personality Development Course",
    code: "3160003",
    semester: 6,
    description:
      "Integrated personality development focusing on values, ethics, leadership, and holistic growth.",
    papers: [
      {
        title: "IPDC Winter 2025",
        code: "3160003",
        year: "2025",
        type: "Winter",
        pdf: "/pdfs/pyq/integrated-personality-development-course/ipdc-winter-2025.pdf",
        solutionAvailable: false,
        testSlug: "winter-2025",
      },
      {
        title: "IPDC Summer 2025",
        code: "3160003",
        year: "2025",
        type: "Summer",
        pdf: "/pdfs/pyq/integrated-personality-development-course/ipdc-summer-2025.pdf",
        solutionAvailable: false,
        testSlug: "summer-2025",
      },
      {
        title: "IPDC Winter 2024",
        code: "3160003",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/integrated-personality-development-course/ipdc-winter-2024.pdf",
        solutionAvailable: false,
        testSlug: "winter-2024",
      },
      {
        title: "IPDC Summer 2024",
        code: "3160003",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/integrated-personality-development-course/ipdc-summer-2024.pdf",
        solutionAvailable: false,
        testSlug: "summer-2024",
      },
      {
        title: "IPDC Winter 2023",
        code: "3160003",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/integrated-personality-development-course/ipdc-winter-2023.pdf",
        solutionAvailable: false,
        testSlug: "winter-2023",
      },
    ],
  },
};

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
        solutionAvailable: true,
        solutionFile: "wp-summer-2025-solution.pdf",
      },
      {
        title: "WP Winter 2024",
        code: "3160713",
        year: "2024",
        type: "Winter",
        pdf: "/pdfs/pyq/web-programming/wp-winter-2024.pdf",
        solutionAvailable: true,
        solutionFile: "wp-winter-2024-solution.pdf",
      },
      {
        title: "WP Summer 2024",
        code: "3160713",
        year: "2024",
        type: "Summer",
        pdf: "/pdfs/pyq/web-programming/wp-summer-2024.pdf",
        solutionAvailable: true,
        solutionFile: "wp-summer-2024-solution.pdf",
      },
      {
        title: "WP Winter 2023",
        code: "3160713",
        year: "2023",
        type: "Winter",
        pdf: "/pdfs/pyq/web-programming/wp-winter-2023.pdf",
        solutionAvailable: true,
        solutionFile: "wp-winter-2023-solution.pdf",
      },
      {
        title: "WP Summer 2023",
        code: "3160713",
        year: "2023",
        type: "Summer",
        pdf: "/pdfs/pyq/web-programming/wp-summer-2023.pdf",
        solutionAvailable: true,
        solutionFile: "wp-summer-2023-solution.pdf",
      },
    ],
  },
};

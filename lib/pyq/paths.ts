import { subjectData } from "@/app/pyq/_data/subjects";
import { PYQ_PDF_BASE } from "./constants";

/** Storage object name in bucket premium-pdfs (filename only, no folders). */
export function normalizeStorageFile(file: string): string {
  return file.replace(/^\/+/, "").split("/").pop() ?? file;
}

/** Public URL for a free PYQ paper PDF in /public */
export function getFreePdfUrl(pdfPath: string): string {
  if (pdfPath.startsWith("/")) return pdfPath;
  return `${PYQ_PDF_BASE}/${pdfPath.replace(/^\/+/, "")}`;
}

const ALLOWED_STORAGE_FILES = new Set<string>();

function buildAllowlist() {
  if (ALLOWED_STORAGE_FILES.size > 0) return;
  for (const subject of Object.values(subjectData)) {
    for (const paper of subject.papers) {
      if (paper.solutionFile) {
        ALLOWED_STORAGE_FILES.add(normalizeStorageFile(paper.solutionFile));
      }
    }
  }
}

export function isAllowedStorageFile(file: string): boolean {
  buildAllowlist();
  const normalized = normalizeStorageFile(file);
  if (!normalized || normalized.includes("..")) return false;
  return ALLOWED_STORAGE_FILES.has(normalized);
}

export function getAllSolutionFiles(): string[] {
  buildAllowlist();
  return Array.from(ALLOWED_STORAGE_FILES);
}

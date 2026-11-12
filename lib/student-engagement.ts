export const recentStorageKey = "gtu-studenthub-recent-v1";
export const bookmarksStorageKey = "gtu-studenthub-bookmarks-v1";
export const mcqProgressStorageKey = "gtu-studenthub-mcq-progress-v1";
export const maxRecentResources = 12;
export const maxSavedResources = 100;
export const maxMcqTests = 12;

export type EngagementResourceType =
  | "Subject"
  | "PYQ"
  | "Notes"
  | "Syllabus"
  | "MCQ"
  | "Semester";

export type EngagementResource = {
  id: string;
  title: string;
  href: string;
  type: EngagementResourceType;
  subjectName?: string;
  subjectCode?: string;
  semester?: number;
};

export type StoredResource = EngagementResource & {
  timestamp: number;
};

export type McqProgress = {
  testSlug: string;
  title: string;
  answers: Record<number, string>;
  totalQuestions: number;
  completedAt?: string;
  updatedAt: number;
};

const resourceTypes: EngagementResourceType[] = [
  "Subject",
  "PYQ",
  "Notes",
  "Syllabus",
  "MCQ",
  "Semester",
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isSafeLocalHref(value: unknown): value is string {
  if (
    typeof value !== "string" ||
    !value.startsWith("/") ||
    value.startsWith("//") ||
    value.includes("\\") ||
    value.length > 512
  ) {
    return false;
  }

  const path = value.split(/[?#]/, 1)[0];
  return !path.split("/").some((part) => part === "." || part === "..");
}

function normalizeResource(value: unknown): StoredResource | null {
  if (!isRecord(value)) return null;

  const { title, href, type, timestamp } = value;
  if (
    typeof title !== "string" ||
    !title.trim() ||
    title.length > 160 ||
    !isSafeLocalHref(href) ||
    typeof type !== "string" ||
    !resourceTypes.includes(type as EngagementResourceType) ||
    typeof timestamp !== "number" ||
    !Number.isFinite(timestamp) ||
    timestamp <= 0
  ) {
    return null;
  }

  const subjectName =
    typeof value.subjectName === "string" && value.subjectName.length <= 160
      ? value.subjectName
      : undefined;
  const subjectCode =
    typeof value.subjectCode === "string" && value.subjectCode.length <= 32
      ? value.subjectCode
      : undefined;
  const semester =
    typeof value.semester === "number" &&
    Number.isInteger(value.semester) &&
    value.semester >= 1 &&
    value.semester <= 8
      ? value.semester
      : undefined;

  return {
    id: href,
    title: title.trim(),
    href,
    type: type as EngagementResourceType,
    timestamp,
    subjectName,
    subjectCode,
    semester,
  };
}

export function parseStoredResources(
  raw: string | null,
  limit: number,
): { resources: StoredResource[]; recoveredInvalidData: boolean } {
  if (!raw) return { resources: [], recoveredInvalidData: false };

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return { resources: [], recoveredInvalidData: true };
    }

    const resources: StoredResource[] = [];
    const seen = new Set<string>();
    let recoveredInvalidData = false;

    for (const item of parsed) {
      const resource = normalizeResource(item);
      if (!resource || seen.has(resource.href)) {
        recoveredInvalidData = true;
        continue;
      }
      seen.add(resource.href);
      resources.push(resource);
    }

    return {
      resources: resources
        .sort((first, second) => second.timestamp - first.timestamp)
        .slice(0, limit),
      recoveredInvalidData:
        recoveredInvalidData || resources.length > limit,
    };
  } catch {
    return { resources: [], recoveredInvalidData: true };
  }
}

function normalizeMcqProgress(value: unknown, testSlug: string): McqProgress | null {
  if (!isRecord(value)) return null;

  const { title, answers, totalQuestions, completedAt, updatedAt } = value;
  if (
    typeof title !== "string" ||
    !title.trim() ||
    title.length > 160 ||
    !isRecord(answers) ||
    typeof totalQuestions !== "number" ||
    !Number.isInteger(totalQuestions) ||
    totalQuestions < 1 ||
    totalQuestions > 1000 ||
    typeof updatedAt !== "number" ||
    !Number.isFinite(updatedAt) ||
    updatedAt <= 0 ||
    (completedAt !== undefined &&
      (typeof completedAt !== "string" || !Number.isFinite(Date.parse(completedAt))))
  ) {
    return null;
  }

  const normalizedAnswers: Record<number, string> = {};
  for (const [questionId, answer] of Object.entries(answers)) {
    if (
      !/^\d+$/.test(questionId) ||
      typeof answer !== "string" ||
      answer.length > 256
    ) {
      continue;
    }
    normalizedAnswers[Number(questionId)] = answer;
  }

  return {
    testSlug,
    title: title.trim(),
    answers: normalizedAnswers,
    totalQuestions,
    completedAt: typeof completedAt === "string" ? completedAt : undefined,
    updatedAt,
  };
}

export function parseMcqProgress(
  raw: string | null,
): { progress: Record<string, McqProgress>; recoveredInvalidData: boolean } {
  if (!raw) return { progress: {}, recoveredInvalidData: false };

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed)) {
      return { progress: {}, recoveredInvalidData: true };
    }

    const entries = Object.entries(parsed)
      .map(([slug, value]) => ({
        slug,
        progress: /^[a-z0-9-]{1,100}$/.test(slug)
          ? normalizeMcqProgress(value, slug)
          : null,
      }))
      .sort((first, second) =>
        (second.progress?.updatedAt ?? 0) - (first.progress?.updatedAt ?? 0),
      );
    const progress: Record<string, McqProgress> = {};
    let recoveredInvalidData = false;

    for (const { slug, progress: item } of entries) {
      if (!item || Object.keys(progress).length >= maxMcqTests) {
        recoveredInvalidData = true;
        continue;
      }
      progress[slug] = item;
    }

    return { progress, recoveredInvalidData };
  } catch {
    return { progress: {}, recoveredInvalidData: true };
  }
}

export function toStoredResource(
  resource: EngagementResource,
  timestamp: number,
): StoredResource | null {
  return normalizeResource({ ...resource, timestamp });
}

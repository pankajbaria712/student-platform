import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";

interface RelatedSubject {
  slug: string;
  title: string;
  semester?: number;
}

interface RelatedPyqSectionProps {
  currentSubjectSlug: string;
  subjects: RelatedSubject[];
  limit?: number;
}

export default function RelatedPyqSection({
  currentSubjectSlug,
  subjects,
  limit = 5,
}: RelatedPyqSectionProps) {
  const relatedSubjects = subjects
    .filter((s) => s.slug !== currentSubjectSlug)
    .slice(0, limit);

  if (!relatedSubjects.length) return null;

  return (
    <section className="mt-16 border-t border-slate-800 pt-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Related Previous Year Papers
        </h2>
        <p className="mt-2 text-slate-400">
          Prepare with papers from related subjects
        </p>
      </div>

      <div className="grid gap-3">
        {relatedSubjects.map((subject) => (
          <Link
            key={subject.slug}
            href={`/pyq/${subject.slug}`}
            className="group flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/50 p-4 transition hover:border-indigo-500/50 hover:bg-slate-900/80"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-indigo-500/10 p-2 group-hover:bg-indigo-500/20">
                <FileText size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="font-semibold text-white">{subject.title} PYQ</p>
                <p className="text-xs text-slate-400">
                  {subject.semester
                    ? `Semester ${subject.semester}`
                    : "Previous Year Papers"}
                </p>
              </div>
            </div>
            <ChevronRight
              size={18}
              className="text-slate-600 transition group-hover:text-indigo-400"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

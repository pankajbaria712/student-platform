import Link from "next/link";
import { BookOpen, ChevronRight } from "lucide-react";

interface RelatedSubject {
  slug: string;
  title: string;
  semester: number;
}

interface RelatedSubjectsSectionProps {
  currentSubjectSlug: string;
  semester: string;
  subjects: RelatedSubject[];
}

export default function RelatedVivaSubjectsSection({
  currentSubjectSlug,
  semester,
  subjects,
}: RelatedSubjectsSectionProps) {
  const relatedSubjects = subjects
    .filter(
      (s) =>
        s.slug !== currentSubjectSlug &&
        String(s.semester) === semester
    )
    .slice(0, 4);

  if (!relatedSubjects.length) return null;

  return (
    <section className="mt-16 border-t border-slate-800 pt-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Continue Viva Preparation
        </h2>
        <p className="mt-2 text-slate-400">
          Explore other subjects from Semester {semester}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {relatedSubjects.map((subject) => (
          <Link
            key={subject.slug}
            href={`/semester/${semester}/${subject.slug}/viva`}
            className="group flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/50 p-5 transition hover:border-indigo-500/50 hover:bg-slate-900/80"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-indigo-500/10 p-3 group-hover:bg-indigo-500/20">
                <BookOpen size={20} className="text-indigo-400" />
              </div>
              <div>
                <p className="font-semibold text-white">{subject.title}</p>
                <p className="text-sm text-slate-400">Viva Preparation</p>
              </div>
            </div>
            <ChevronRight
              size={20}
              className="text-slate-600 transition group-hover:text-indigo-400"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

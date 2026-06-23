import Link from "next/link";
import { ChevronRight, GraduationCap } from "lucide-react";

interface SemesterNavigationProps {
  currentSemester: string;
  allSemesters: string[];
}

export default function SemesterNavigation({
  currentSemester,
  allSemesters,
}: SemesterNavigationProps) {
  const otherSemesters = allSemesters.filter((s) => s !== currentSemester);

  if (!otherSemesters.length) return null;

  return (
    <section className="mt-16 border-t border-slate-800 pt-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Explore Other Semesters
        </h2>
        <p className="mt-2 text-slate-400">
          Navigate to different semesters and explore subjects
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {otherSemesters.map((semester) => (
          <Link
            key={semester}
            href={`/semester/${semester}`}
            className="group flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/50 p-4 transition hover:border-indigo-500/50 hover:bg-slate-900/80"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-indigo-500/10 p-2 group-hover:bg-indigo-500/20">
                <GraduationCap size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Semester {semester}</p>
                <p className="text-xs text-slate-400">
                  {semester === "7"
                    ? "With Internship"
                    : semester === "8"
                      ? "Final Semester"
                      : "Core Subjects"}
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

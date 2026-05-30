import Link from "next/link";

interface SubjectCardProps {
  title: string;
  slug: string;
  semester: number;
}

export default function SubjectCard({
  title,
  slug,
  semester,
}: SubjectCardProps) {
  return (
    <Link
      href={`/subject/${slug}`}
      className="block rounded-3xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">Semester {semester}</p>
        </div>
        <div className="text-right">
          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium">
            Free Notes
          </span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Notes, PYQs, and downloadable solution PDFs
        </p>
      </div>
    </Link>
  );
}

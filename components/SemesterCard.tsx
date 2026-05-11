import Link from "next/link";

interface SemesterCardProps {
  semester: number;
}

export default function SemesterCard({ semester }: SemesterCardProps) {
  return (
    <Link
      href={`/semester/${semester}`}
      className="block rounded-3xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Semester {semester}</h3>
          <p className="mt-1 text-sm text-gray-600">BE Computer Engineering</p>
        </div>
        <div className="text-2xl font-bold text-gray-300">{semester}</div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Access notes, PYQs, and premium content
        </p>
      </div>
    </Link>
  );
}

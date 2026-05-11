import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 inline-block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium">
            BE Computer Engineering
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Semester Notes + PYQs + Premium PDF Downloads
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            Read notes for free. Download premium PDFs for just ₹33. Fast,
            simple, and built for students.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#notes"
              className="rounded-2xl bg-black px-6 py-3 text-white shadow-sm transition hover:bg-gray-800"
            >
              Explore Notes
            </Link>
            <Link
              href="#premium"
              className="rounded-2xl border border-gray-300 px-6 py-3 transition hover:bg-gray-50"
            >
              Unlock Premium
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-xl font-semibold">Popular Subjects</h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-sm">DBMS - Semester 5</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm">Operating System - Semester 5</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span className="text-sm">Computer Networks - Semester 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

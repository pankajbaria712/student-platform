type Subject = {
  code: string;
  name: string;
  credits: number;
  category: string;
  link: string;
};

const semester5Subjects: Subject[] = [
  {
    code: "3160704",
    name: "Theory of Computation",
    credits: 5,
    category: "Professional Core",
    link: "/subject/theory-of-computation",
  },
  {
    code: "3160707",
    name: "Advanced Java Programming",
    credits: 4,
    category: "Professional Elective - III",
    link: "/subject/advanced-java-programming",
  },
  {
    code: "3160712",
    name: "Microprocessor and Interfacing",
    credits: 4,
    category: "Professional Core",
    link: "/subject/microprocessor-and-interfacing",
  },
  {
    code: "3160713",
    name: "Web Programming",
    credits: 4,
    category: "Professional Elective - II",
    link: "/subject/web-programming",
  },
  {
    code: "3160714",
    name: "Data Mining",
    credits: 4,
    category: "Professional Elective - II",
    link: "/subject/data-mining",
  },
  {
    code: "3160715",
    name: "System Software",
    credits: 4,
    category: "Professional Elective - III",
    link: "/subject/system-software",
  },
  {
    code: "3160716",
    name: "IoT and Applications",
    credits: 3,
    category: "Open Elective - II",
    link: "/subject/iot-and-applications",
  },
  {
    code: "3160717",
    name: "Data Visualization",
    credits: 3,
    category: "Open Elective - II",
    link: "/subject/data-visualization",
  },
];

export default function SemesterPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-gray-900">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm font-medium text-gray-500">
            BE Computer Engineering
          </p>
          <h1 className="mt-2 text-4xl font-bold">Semester 6 Subjects</h1>
          <p className="mt-3 text-gray-600">
            Notes, PYQs, important questions, viva preparation, and premium PDF
            downloads for Semester 6.
          </p>
        </div>

        {/* Subject Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {semester5Subjects.map((subject) => (
            <div
              key={subject.code}
              className="rounded-3xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">{subject.code}</p>
                  <h2 className="mt-1 text-xl font-semibold">{subject.name}</h2>
                </div>

                <span className="rounded-xl border px-3 py-1 text-sm font-medium">
                  {subject.credits} Credits
                </span>
              </div>

              <p className="mt-4 text-sm text-gray-600">{subject.category}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={subject.link}
                  className="rounded-2xl bg-black px-5 py-2 text-sm font-medium text-white"
                >
                  View Notes
                </a>

                <button className="rounded-2xl border border-gray-300 px-5 py-2 text-sm font-medium">
                  PYQ PDFs
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Section */}
        <section className="mt-14 rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-2xl font-bold">Premium PDF Access</h3>
          <p className="mt-3 text-gray-600">
            Read notes for free on the website. Download full printable PDFs for
            only ₹33 per subject.
          </p>

          <button className="mt-6 rounded-2xl bg-black px-6 py-3 text-white">
            Unlock Premium PDF – ₹33
          </button>
        </section>
      </div>
    </main>
  );
}

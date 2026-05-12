type Subject = {
  code: string;
  name: string;
  credits: number;
  category: string;
  notesLink: string;
  syllabusPdf: string;
  pyqLink: string;
};

const semester6Subjects: Subject[] = [
  {
    code: "3160704",
    name: "Theory of Computation",
    credits: 5,
    category: "Professional Core",
    notesLink: "/subject/theory-of-computation",
    syllabusPdf: "/pdfs/syllabus/theory-of-computation-syllabus.pdf",
    pyqLink: "/pyq/theory-of-computation",
  },
  {
    code: "3160707",
    name: "Advanced Java Programming",
    credits: 4,
    category: "Professional Elective - III",
    notesLink: "/subject/advanced-java-programming",
    syllabusPdf: "/pdfs/syllabus/advanced-java-programming-syllabus.pdf",
    pyqLink: "/pyq/advanced-java-programming",
  },
  {
    code: "3160712",
    name: "Microprocessor and Interfacing",
    credits: 4,
    category: "Professional Core",
    notesLink: "/subject/microprocessor-and-interfacing",
    syllabusPdf: "/pdfs/syllabus/microprocessor-and-interfacing-syllabus.pdf",
    pyqLink: "/pyq/microprocessor-and-interfacing",
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
            Notes, Syllabus PDFs, Previous Year Question Papers, and Premium PDF
            downloads for Semester 6.
          </p>
        </div>

        {/* Subject Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {semester6Subjects.map((subject) => (
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
                {/* View Notes */}
                <a
                  href={subject.notesLink}
                  className="rounded-2xl bg-black px-5 py-2 text-sm font-medium text-white"
                >
                  View Notes
                </a>

                {/* Syllabus PDF */}
                <a
                  href={subject.syllabusPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-gray-300 px-5 py-2 text-sm font-medium"
                >
                  Syllabus
                </a>

                {/* PYQ Page */}
                <a
                  href={subject.pyqLink}
                  className="rounded-2xl border border-gray-300 px-5 py-2 text-sm font-medium"
                >
                  PYQ Papers
                </a>
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

/*
PDF SAVE LOCATION:

Create this folder:

public/
  pdfs/
    syllabus/
      theory-of-computation-syllabus.pdf
      advanced-java-programming-syllabus.pdf

Why public folder?
Because free PDFs like syllabus should be directly readable + downloadable.

When user clicks Syllabus:
PDF opens in browser readable mode.
Browser automatically shows Download button also.

PYQ FLOW:
Create a separate page like:

app/
  pyq/
    theory-of-computation/
      page.tsx

That page should show list like:
- TOC SUMMER 2025
- TOC WINTER 2024
- TOC SUMMER 2024

Each item opens its PDF.
*/

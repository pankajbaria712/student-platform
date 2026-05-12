type Chapter = {
  title: string;
  topics: string[];
};

const subjectData = {
  code: "3160704",
  name: "Theory of Computation",
  semester: "Semester 6",
  description:
    "Unit-wise syllabus, chapter notes, important questions, PYQs, and premium PDF access.",
  chapters: [
    {
      title: "Unit 1: Introduction to Automata",
      topics: [
        "Basic concepts of automata",
        "Finite automata",
        "Deterministic finite automata (DFA)",
        "Non-deterministic finite automata (NFA)",
      ],
    },
    {
      title: "Unit 2: Regular Expressions",
      topics: [
        "Regular languages",
        "Regular expressions",
        "Conversion of RE to FA",
        "Pumping lemma basics",
      ],
    },
    {
      title: "Unit 3: Context Free Grammar",
      topics: [
        "CFG introduction",
        "Parse tree",
        "Ambiguity in grammar",
        "Normal forms",
      ],
    },
    {
      title: "Unit 4: Turing Machine",
      topics: [
        "Turing machine basics",
        "Design examples",
        "Recursive and recursively enumerable languages",
      ],
    },
  ],
};

interface SubjectPageProps {
  params: {
    slug: string;
  };
}

export default function SubjectPage({ params }: SubjectPageProps) {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-gray-900">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-gray-500">
            {subjectData.semester} • {subjectData.code}
          </p>
          <h1 className="mt-2 text-4xl font-bold">{subjectData.name}</h1>
          <p className="mt-3 max-w-3xl text-gray-600">
            {subjectData.description}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mb-10 flex flex-wrap gap-4">
          <button className="rounded-2xl bg-black px-6 py-3 text-white">
            Read Notes Free
          </button>
          <button className="rounded-2xl border border-gray-300 px-6 py-3">
            View PYQ PDFs
          </button>
          <button className="rounded-2xl border border-gray-300 px-6 py-3">
            Important Questions
          </button>
        </div>

        {/* Chapter Wise Notes */}
        <section>
          <h2 className="text-3xl font-bold">Chapter-wise Notes</h2>
          <p className="mt-2 text-gray-600">
            Read complete unit-wise notes directly on the website.
          </p>

          <div className="mt-8 space-y-6">
            {subjectData.chapters.map((chapter) => (
              <div
                key={chapter.title}
                className="rounded-3xl border border-gray-200 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{chapter.title}</h3>

                <ul className="mt-4 space-y-2 text-gray-700">
                  {chapter.topics.map((topic) => (
                    <li key={topic}>• {topic}</li>
                  ))}
                </ul>

                <a
                  href={`/subject/${params.slug}/unit-1`}
                  className="rounded-xl border px-4 py-2 text-sm font-medium"
                >
                  Open Full Notes
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Premium PDF Section */}
        <section className="mt-14 rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-2xl font-bold">Premium PDF Download</h3>
          <p className="mt-3 text-gray-600">
            Download complete printable notes PDF, revision notes, and exam
            important questions for only ₹33.
          </p>

          <ul className="mt-5 space-y-2 text-sm text-gray-700">
            <li>✔ Full Subject PDF</li>
            <li>✔ Printable Format</li>
            <li>✔ Exam Revision Notes</li>
            <li>✔ Important Questions + PYQ Support</li>
          </ul>

          <button className="mt-8 rounded-2xl bg-black px-6 py-3 text-white">
            Download Premium PDF – ₹33
          </button>
        </section>
      </div>
    </main>
  );
}

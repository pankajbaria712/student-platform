import PremiumButton from "@/components/PremiumButton";

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
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <p className="text-sm font-medium text-slate-400">
            {subjectData.semester} • {subjectData.code}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white">
            {subjectData.name}
          </h1>
          <p className="mt-3 max-w-3xl text-slate-400">
            {subjectData.description}
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-4">
          <a
            href={`/subject/${params.slug}/unit-1`}
            className="rounded-2xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Read Notes Free
          </a>
          <a
            href={`/pyq/${params.slug}`}
            className="rounded-2xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white"
          >
            View PYQ PDFs
          </a>
          <a
            href="/contact"
            className="rounded-2xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white"
          >
            Contact Support
          </a>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-white">Chapter-wise Notes</h2>
          <p className="mt-2 text-slate-400">
            Read complete unit-wise notes directly on the website.
          </p>

          <div className="mt-8 space-y-6">
            {subjectData.chapters.map((chapter) => (
              <div
                key={chapter.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-white">
                  {chapter.title}
                </h3>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {chapter.topics.map((topic) => (
                    <li key={topic}>• {topic}</li>
                  ))}
                </ul>
                <a
                  href={`/subject/${params.slug}/unit-1`}
                  className="mt-6 inline-flex rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-500/20"
                >
                  Open Full Notes
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Premium PDF Download
              </h3>
              <p className="mt-3 max-w-2xl text-slate-400">
                Download complete printable notes, revision highlights, and exam
                support for only ₹33.
              </p>
              <ul className="mt-6 space-y-2 text-slate-300">
                <li>✔ Full Subject PDF</li>
                <li>✔ Printable Download</li>
                <li>✔ Revision Notes Included</li>
                <li>✔ Accessible Anytime</li>
              </ul>
            </div>

            <PremiumButton
              subjectId={params.slug}
              subjectTitle={subjectData.name}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

import Navbar from "@/components/Navbar";

type Chapter = {
  title: string;
  topics: string[];
};

const subjectData = {
  code: "3160704",
  name: "Theory of Computation",
  semester: "Semester 6",
  description:
    "Unit-wise syllabus, chapter notes, important questions, and PYQs.",
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-page py-8 sm:py-10">
        <div className="mb-8 rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:mb-10 sm:rounded-[2rem] sm:p-8">
          <p className="text-xs font-medium text-slate-400 sm:text-sm">
            {subjectData.semester} • {subjectData.code}
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-4xl">
            {subjectData.name}
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-400 sm:text-base">
            {subjectData.description}
          </p>
        </div>

        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:flex-wrap">
          <a
            href={`/subject/${params.slug}/unit-1`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-indigo-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-400 sm:px-6"
          >
            Read notes free
          </a>
          <a
            href={`/pyq/${params.slug}`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white sm:px-6"
          >
            View PYQ PDFs
          </a>
          <a
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white sm:px-6"
          >
            Contact support
          </a>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Chapter-wise notes
          </h2>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Read complete unit-wise notes directly on the website.
          </p>

          <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-6">
            {subjectData.chapters.map((chapter) => (
              <div
                key={chapter.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-sm sm:rounded-3xl sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white sm:text-xl">
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
      </main>
    </div>
  );
}

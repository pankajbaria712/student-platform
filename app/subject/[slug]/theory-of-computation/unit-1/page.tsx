import Link from "next/link";
import Navbar from "@/components/Navbar";
import PremiumButton from "@/components/PremiumButton";

type NoteSection = {
  heading: string;
  content: string;
};

const noteData = {
  subjectName: "Theory of Computation",
  unitTitle: "Unit 1: Introduction to Automata",
  semester: "Semester 6",
  subjectCode: "3160704",
  sections: [
    {
      heading: "1. Introduction",
      content:
        "Automata theory is a branch of computer science that deals with abstract machines and the problems they can solve. It helps us understand how computation works and forms the foundation of compilers, programming languages, and artificial intelligence.",
    },
    {
      heading: "2. Finite Automata",
      content:
        "Finite Automata is a machine used to recognize patterns. It consists of states, transitions, input symbols, and accepting states. It is mainly used in lexical analysis and text processing.",
    },
    {
      heading: "3. Deterministic Finite Automata (DFA)",
      content:
        "In DFA, for every state and input symbol, there is exactly one next state. DFA is simple and predictable because there is only one path for each input.",
    },
    {
      heading: "4. Non-Deterministic Finite Automata (NFA)",
      content:
        "In NFA, one state can have multiple possible next states for the same input symbol. It is more flexible than DFA and can be converted into DFA.",
    },
    {
      heading: "5. Difference Between DFA and NFA",
      content:
        "DFA has exactly one transition for each symbol, while NFA can have multiple transitions. DFA is easier to implement, while NFA is easier to design.",
    },
  ] as NoteSection[],
};

interface UnitPageProps {
  params: {
    slug: string;
  };
}

export default function FullNotesPage({ params }: UnitPageProps) {
  const subjectSlug = params.slug || "theory-of-computation";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-4xl px-page py-8 pb-safe sm:py-10">
        <nav className="text-xs text-slate-400 sm:text-sm" aria-label="Breadcrumb">
          <Link href="/" className="text-indigo-400 hover:text-indigo-300">
            Home
          </Link>
          <span className="mx-2 text-slate-600">/</span>
          <Link
            href={`/subject/${subjectSlug}`}
            className="text-indigo-400 hover:text-indigo-300"
          >
            {noteData.subjectName}
          </Link>
          <span className="mx-2 text-slate-600">/</span>
          <span className="text-slate-300">Unit 1</span>
        </nav>

        <p className="mt-4 text-xs text-slate-500 sm:text-sm">
          {noteData.semester} · {noteData.subjectCode}
        </p>

        <div className="mt-3">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl">
            {noteData.unitTitle}
          </h1>
          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Read complete chapter-wise notes for free. Premium users can
            download the full printable PDF for ₹33.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#notes-content"
            className="inline-flex min-h-[44px] items-center justify-center rounded-2xl bg-indigo-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            Continue reading
          </a>
          <Link
            href={`/pyq/${subjectSlug}`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white"
          >
            View PYQ questions
          </Link>
        </div>

        <section id="notes-content" className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
          {noteData.sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:rounded-3xl sm:p-6"
            >
              <h2 className="text-lg font-semibold text-white sm:text-2xl">
                {section.heading}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-8">
                {section.content}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:mt-14 sm:rounded-3xl sm:p-8">
          <h3 className="text-xl font-bold text-white sm:text-2xl">
            Important exam questions
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-300 sm:text-base">
            <li>Explain Finite Automata with example.</li>
            <li>Differentiate between DFA and NFA.</li>
            <li>Explain the applications of Automata Theory.</li>
            <li>Draw DFA for binary strings ending with 01.</li>
          </ul>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:mt-14 sm:rounded-3xl sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Premium PDF download
              </h3>
              <p className="mt-3 text-sm text-slate-400 sm:text-base">
                Full printable PDF, revision notes, PYQ support, and exam-focused
                important questions for ₹33.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Full subject PDF",
                  "Printable version",
                  "Revision notes",
                  "Important questions",
                ].map((label) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-700/80 bg-slate-950/50 px-4 py-3 text-sm text-slate-300"
                  >
                    ✔ {label}
                  </div>
                ))}
              </div>
            </div>
            <PremiumButton
              subjectId={subjectSlug}
              subjectTitle={noteData.subjectName}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

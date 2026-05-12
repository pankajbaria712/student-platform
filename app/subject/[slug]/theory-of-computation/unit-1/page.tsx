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

export default function FullNotesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-4xl px-6 py-10">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500">
          {noteData.semester} • {noteData.subjectCode} • {noteData.subjectName}
        </p>

        {/* Title */}
        <div className="mt-4">
          <h1 className="text-4xl font-bold">{noteData.unitTitle}</h1>
          <p className="mt-3 text-gray-600">
            Read complete chapter-wise notes for free. Premium users can
            download the full printable PDF for ₹33.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-2xl bg-black px-6 py-3 text-white">
            Continue Reading
          </button>

          <button className="rounded-2xl border border-gray-300 px-6 py-3">
            View PYQ Questions
          </button>
        </div>

        {/* Notes Content */}
        <section className="mt-12 space-y-8">
          {noteData.sections.map((section) => (
            <article
              key={section.heading}
              className="rounded-3xl border border-gray-200 p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold">{section.heading}</h2>
              <p className="mt-4 leading-8 text-gray-700">{section.content}</p>
            </article>
          ))}
        </section>

        {/* Important Questions */}
        <section className="mt-14 rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-2xl font-bold">Important Exam Questions</h3>

          <ul className="mt-5 space-y-3 text-gray-700">
            <li>• Explain Finite Automata with example.</li>
            <li>• Differentiate between DFA and NFA.</li>
            <li>• Explain the applications of Automata Theory.</li>
            <li>• Draw DFA for binary strings ending with 01.</li>
          </ul>
        </section>

        {/* Premium PDF Section */}
        <section className="mt-14 rounded-3xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-2xl font-bold">Premium PDF Download</h3>
          <p className="mt-3 text-gray-600">
            Download full printable notes PDF, revision notes, PYQ support, and
            exam-focused important questions for only ₹33.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border p-4">✔ Full Subject PDF</div>
            <div className="rounded-2xl border p-4">✔ Printable Version</div>
            <div className="rounded-2xl border p-4">✔ Revision Notes</div>
            <div className="rounded-2xl border p-4">✔ Important Questions</div>
          </div>

          <button className="mt-8 rounded-2xl bg-black px-6 py-3 text-white">
            Download Premium PDF – ₹33
          </button>
        </section>
      </div>
    </main>
  );
}

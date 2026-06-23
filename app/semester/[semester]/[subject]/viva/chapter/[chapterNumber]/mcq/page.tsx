"use client";
import { useState } from "react";
import useQuiz from "@/lib/hooks/useQuiz";
import Link from "next/link";
import { getVivaData, getVivaSubject } from "@/lib/viva";

interface Props {
  params: { semester: string; subject: string; chapterNumber: string };
}

export default function McqPage({ params }: Props) {
  const vivaData = getVivaData(params.subject);
  const chapNum = Number(params.chapterNumber);
  const chapter = vivaData.find((c) => c.chapterNumber === chapNum);
  const [submitted, setSubmitted] = useState(false);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold">Chapter not found</h2>
          <p className="mt-3 text-slate-300">The requested chapter does not exist.</p>
          <div className="mt-6">
            <Link href={`/semester/${params.semester}/${params.subject}/viva`} className="text-sky-400 underline">
              Back to Viva Hub
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const questions = chapter.mcqs.map((m) => ({ question: m.question, options: m.options, correctAnswer: m.correctAnswer }));

  const quiz = useQuiz(questions);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">{chapter.chapterName} — MCQ Quiz</h1>
            <p className="text-sm text-slate-300">Chapter {chapter.chapterNumber} • {quiz.total} questions</p>
          </div>
          <div>
            <Link href={`/semester/${params.semester}/${params.subject}/viva`} className="text-sky-400 underline">
              Back to Viva Hub
            </Link>
          </div>
        </div>

        <div className="mt-6">
          {!submitted ? (
            <div className="space-y-4">
              <div className="p-4 bg-slate-900 rounded">
                <div className="text-sm text-slate-400">Question {quiz.index + 1} / {quiz.total}</div>
                <h2 className="mt-2 text-lg font-medium">{quiz.current?.question}</h2>
                <div className="mt-3 grid gap-2">
                  {quiz.current?.options.map((opt) => {
                    const selected = quiz.answers[quiz.index] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => quiz.select(opt)}
                        className={`w-full text-left p-3 rounded border ${selected ? 'border-sky-500 bg-slate-800' : 'border-slate-700'} text-slate-100`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-x-2">
                  <button onClick={quiz.prev} className="px-3 py-2 rounded bg-slate-800 text-slate-100 border border-slate-700">Prev</button>
                  <button onClick={quiz.next} className="px-3 py-2 rounded bg-slate-800 text-slate-100 border border-slate-700">Next</button>
                </div>
                <div>
                  {quiz.index === quiz.total - 1 ? (
                    <button onClick={handleSubmit} className="px-4 py-2 rounded bg-sky-600 text-white">Submit Quiz</button>
                  ) : null}
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-slate-900 rounded">
              <h2 className="text-2xl font-semibold">Result</h2>
              <p className="mt-2 text-slate-300">Score: {quiz.score} / {quiz.total} ({quiz.percent}%)</p>

              <div className="mt-4 space-y-3">
                {chapter.mcqs.map((m, i) => {
                  const given = quiz.answers[i] ?? null;
                  const correct = m.correctAnswer;
                  const ok = given === correct;
                  return (
                    <div key={i} className="p-3 bg-slate-800 rounded">
                      <div className="text-sm text-slate-300">{i + 1}. {m.question}</div>
                      <div className="mt-2 text-sm">
                        <div>Your answer: <span className={`${ok ? 'text-emerald-400' : 'text-rose-400'}`}>{given ?? '—'}</span></div>
                        <div>Correct answer: <span className="text-sky-300">{correct}</span></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex gap-2">
                <button onClick={() => { quiz.reset(); setSubmitted(false); }} className="px-3 py-2 rounded bg-slate-800 border border-slate-700">Retake</button>
                <Link href={`/semester/${params.semester}/${params.subject}/viva`} className="px-3 py-2 rounded bg-slate-700 text-slate-100">Back to Hub</Link>
              </div>

              {/* Smart links after submission */}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Link href={`/semester/${params.semester}/${params.subject}/viva/chapter/${params.chapterNumber}/questions`} className="rounded-lg bg-indigo-500 px-4 py-2.5 text-center text-sm font-semibold text-white">Review Chapter Questions</Link>
                <Link
                  href={Number(params.chapterNumber) < (getVivaSubject(params.subject)?.chapters?.length ?? 0) ? `/semester/${params.semester}/${params.subject}/viva/chapter/${Number(params.chapterNumber)+1}/mcq` : `/semester/${params.semester}/${params.subject}/viva`}
                  className="rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-center text-sm font-semibold text-slate-200"
                >
                  Start Next Chapter MCQ
                </Link>
                <Link href={`/semester/${params.semester}/${params.subject}/viva`} className="rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-center text-sm font-semibold text-slate-200">Continue Viva Preparation</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

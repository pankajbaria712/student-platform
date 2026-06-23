"use client";
import { useState } from "react";
import Link from "next/link";
import useQuiz from "@/lib/hooks/useQuiz";
import { getVivaData } from "@/lib/viva";

export interface Props {
  params: { semester: string; subject: string; chapterNumber: string };
}

export default function McqPageClient({ params }: Props) {
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

  const baseUrl = `/semester/${params.semester}/${params.subject}/viva`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">{chapter.chapterName} — MCQ Quiz</h1>
            <p className="text-sm text-slate-300">Chapter {chapter.chapterNumber} • {quiz.total} questions</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={baseUrl} className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-slate-800">
              Back to Viva Hub
            </Link>
            <Link href={`${baseUrl}/questions/${chapter.chapterNumber}`} className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              Go to Questions
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
                        className={`w-full text-left p-3 rounded border ${selected ? 'border-sky-500 bg-slate-800' : 'border-slate-700'} text-slate-100`}>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
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
              <div className="mt-2 grid gap-2 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-700 bg-slate-950/60 p-4 text-sm">
                  <p className="text-slate-400">Correct</p>
                  <p className="mt-2 text-xl font-semibold text-emerald-400">{quiz.score}</p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-950/60 p-4 text-sm">
                  <p className="text-slate-400">Wrong</p>
                  <p className="mt-2 text-xl font-semibold text-rose-400">{quiz.total - quiz.score}</p>
                </div>
                <div className="rounded-lg border border-slate-700 bg-slate-950/60 p-4 text-sm">
                  <p className="text-slate-400">Percentage</p>
                  <p className="mt-2 text-xl font-semibold text-sky-300">{quiz.percent}%</p>
                </div>
              </div>

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

              <div className="mt-4 flex flex-wrap gap-2">
                <button onClick={() => { quiz.reset(); setSubmitted(false); }} className="px-3 py-2 rounded bg-slate-800 border border-slate-700">Retake</button>
                <Link href={baseUrl} className="px-3 py-2 rounded bg-slate-700 text-slate-100">Back to Hub</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

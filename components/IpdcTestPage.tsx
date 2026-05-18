"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ChevronLeft, Sparkles, XCircle } from "lucide-react";
import type { IpdcTest } from "@/lib/ipdc/mcqs";

type Props = {
  test: IpdcTest;
};

type QuestionItem =
  IpdcTest["sections"][keyof IpdcTest["sections"]]["questions"][number] & {
    sectionLabel: string;
  };

export default function IpdcTestPage({ test }: Props) {
  const questions = useMemo<QuestionItem[]>(() => {
    const items: QuestionItem[] = [];
    for (const [sectionLabel, sectionData] of Object.entries(test.sections)) {
      for (const question of sectionData.questions) {
        items.push({
          ...question,
          sectionLabel,
        });
      }
    }
    return items;
  }, [test]);

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(
    () =>
      questions.reduce(
        (total, question) =>
          total + (answers[question.id] === question.answer ? 1 : 0),
        0,
      ),
    [answers, questions],
  );

  const answeredCount = Object.keys(answers).length;

  const handleSelect = (id: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [id]: option }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
              Free IPDC Mock Test
            </p>
            <h1 className="mt-3 text-3xl font-black sm:text-4xl">
              {test.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
              Practice the official IPDC MCQ pattern with instant scoring and
              answer review.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <Link
              href="/pyq/integrated-personality-development-course"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white transition hover:border-indigo-400/50 hover:bg-white/10"
            >
              <ChevronLeft size={16} /> Back to IPDC
            </Link>
            <Link
              href="/test/ipdc"
              className="inline-flex items-center justify-center rounded-2xl bg-indigo-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-indigo-400"
            >
              All IPDC Tests
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Questions
            </p>
            <p className="mt-3 text-3xl font-black text-white">
              {test.totalQuestions}
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Marks
            </p>
            <p className="mt-3 text-3xl font-black text-white">
              {test.totalMarks}
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
              Access
            </p>
            <p className="mt-3 text-3xl font-black text-white">Free</p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
                Status
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                {submitted ? "Test Completed" : "Ready to start"}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Answered
                </p>
                <p className="mt-2 text-xl font-black text-white">
                  {answeredCount}
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Remaining
                </p>
                <p className="mt-2 text-xl font-black text-white">
                  {Math.max(test.totalQuestions - answeredCount, 0)}
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Score
                </p>
                <p className="mt-2 text-xl font-black text-white">
                  {submitted ? `${score}/${test.totalQuestions}` : "---"}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-300">
              Select one answer for each question. The submit button is at the
              end of the test.
            </p>
          </div>
        </div>

        {submitted && (
          <div className="mt-8 rounded-3xl border border-green-500/20 bg-green-500/5 p-6 text-white">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-green-200">
                  Result
                </p>
                <h2 className="mt-2 text-2xl font-black">
                  Your Score: {score}/{test.totalQuestions}
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-bold text-white">
                <CheckCircle2 className="text-green-400" size={20} />
                {score >= Math.round(test.totalQuestions * 0.75)
                  ? "Strong performance"
                  : "Keep practicing"}
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-200">
              Review your answers below to learn from every question and see the
              correct answer instantly.
            </p>
          </div>
        )}

        <div className="mt-8 space-y-6">
          {questions.map((question, index) => {
            const selected = answers[question.id];
            const correct = question.answer;
            return (
              <div
                key={question.id}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                      Section {question.sectionLabel}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {index + 1}. {question.question}
                    </h3>
                  </div>
                  <div className="text-right text-sm text-gray-300">
                    {submitted ? (
                      selected === correct ? (
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-300">
                          <CheckCircle2 size={16} /> Correct
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3 py-1 text-red-300">
                          <XCircle size={16} /> Incorrect
                        </span>
                      )
                    ) : (
                      <span className="text-gray-500">Select one answer</span>
                    )}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {question.options.map((option) => {
                    const isSelected = selected === option;
                    const isCorrectOption = option === correct;
                    const stateClass = submitted
                      ? isCorrectOption
                        ? "border-emerald-400 bg-emerald-500/10 text-emerald-100"
                        : isSelected
                          ? "border-red-400 bg-red-500/10 text-red-100"
                          : "border-white/10 bg-white/5 text-gray-300"
                      : isSelected
                        ? "border-indigo-400 bg-indigo-500/10 text-white"
                        : "border-white/10 bg-white/5 text-gray-300";

                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => handleSelect(question.id, option)}
                        className={`rounded-2xl border p-4 text-left transition duration-200 hover:border-indigo-400 ${stateClass}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="block text-sm font-semibold">
                            {option}
                          </span>
                        </div>
                        {submitted && isCorrectOption && (
                          <p className="mt-3 text-xs text-emerald-300">
                            Correct answer
                          </p>
                        )}
                        {submitted && isSelected && !isCorrectOption && (
                          <p className="mt-3 text-xs text-red-300">
                            Your answer
                          </p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!answeredCount}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-500 px-6 py-3 text-sm font-black text-black transition hover:bg-indigo-400 disabled:opacity-50"
          >
            {submitted ? "Review Answers" : "Submit Test"}
          </button>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-gray-300">
          <h2 className="text-xl font-bold text-white">Next steps</h2>
          <p className="mt-3 text-sm leading-6 text-gray-300">
            Keep using the free IPDC tests to improve your confidence. When
            you're ready for other GTU subjects, explore premium PYQ bundles or
            return to the IPDC subject page.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/pyq/integrated-personality-development-course"
              className="rounded-2xl bg-indigo-500 px-4 py-3 text-sm font-bold text-black hover:bg-indigo-400"
            >
              Back to IPDC Subject
            </Link>
            <Link
              href="/semester/6"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white hover:border-indigo-400"
            >
              Explore Semester 6 Subjects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

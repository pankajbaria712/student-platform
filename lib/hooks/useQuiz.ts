"use client";
import { useCallback, useMemo, useState } from "react";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer?: string;
}

export default function useQuiz(questions: QuizQuestion[]) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | null>>({});
  const total = questions.length;

  const current = questions[index] ?? null;

  const select = useCallback((option: string) => {
    setAnswers((s) => ({ ...s, [index]: option }));
  }, [index]);

  const go = useCallback((i: number) => {
    if (i < 0) i = 0;
    if (i >= total) i = total - 1;
    setIndex(i);
  }, [total]);

  const next = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

  const score = useMemo(() => {
    let correct = 0;
    questions.forEach((q, i) => {
      const given = answers[i];
      if (given && q.correctAnswer && given === q.correctAnswer) correct++;
    });
    return correct;
  }, [answers, questions]);

  const percent = useMemo(() => (total ? Math.round((score / total) * 100) : 0), [score, total]);

  const reset = useCallback(() => {
    setAnswers({});
    setIndex(0);
  }, []);

  return {
    index,
    current,
    total,
    answers,
    select,
    go,
    next,
    prev,
    score,
    percent,
    reset,
  };
}

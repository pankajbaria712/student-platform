import React from "react";
import { getVivaSubject, getVivaData } from "@/lib/viva";

export default function Head({ params }: { params: { semester: string; subject: string; chapterNumber: string } }) {
  const vivaSubject = getVivaSubject(params.subject);
  const vivaData = getVivaData(params.subject);
  const chapNum = Number(params.chapterNumber);
  const chapter = vivaData.find((c) => c.chapterNumber === chapNum);

  const title = vivaSubject
    ? `${vivaSubject.title} — Chapter ${chapNum} MCQ Practice — Semester ${params.semester} | GTU`
    : "GTU Viva MCQ Practice";

  const description = chapter
    ? `${chapter.mcqs?.length ?? 0} MCQs for ${chapter.chapterName} — practice and instant feedback.`
    : `MCQ practice for chapter ${chapNum}.`;

  const canonical = `https://gtustudenthub.vercel.app/semester/${params.semester}/${params.subject}/viva/chapter/${params.chapterNumber}/mcq`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${vivaSubject?.title ?? "GTU Viva"}, MCQ, viva, chapter ${chapNum}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonical} />
    </>
  );
}

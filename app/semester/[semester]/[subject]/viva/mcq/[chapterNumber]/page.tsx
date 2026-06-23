import type { Metadata } from "next";
import McqPageClient, { Props } from "./McqPageClient";
import { getVivaData, getVivaSubject } from "@/lib/viva";

export function generateMetadata({ params }: Props): Metadata {
  const vivaSubject = getVivaSubject(params.subject);
  const chapterNumber = Number(params.chapterNumber);
  const chapter = getVivaData(params.subject).find((c) => c.chapterNumber === chapterNumber);

  const title = chapter
    ? `${chapter.chapterName} — ${vivaSubject?.title ?? "GTU Subject"} MCQ Quiz`
    : "GTU Viva MCQ Quiz";
  const description = chapter
    ? `Take the ${chapter.chapterName} GTU MCQ quiz for ${vivaSubject?.title}.`
    : "Chapter-wise GTU viva MCQ quiz for exam practice.";

  return {
    title,
    description,
    keywords: [
      vivaSubject?.title ?? "GTU Viva",
      chapter?.chapterName ?? "Chapter MCQ",
      "GTU MCQ quiz",
      "GTU viva practice",
      "GTU exam prep",
    ],
    openGraph: {
      title,
      description,
      url: `https://gtustudenthub.vercel.app/semester/${params.semester}/${params.subject}/viva/chapter/${params.chapterNumber}/mcq`,
      images: ["/image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/image.png"],
    },
    alternates: {
      canonical: `https://gtustudenthub.vercel.app/semester/${params.semester}/${params.subject}/viva/chapter/${params.chapterNumber}/mcq`,
    },
  };
}

export default function McqPage({ params }: Props) {
  return <McqPageClient params={params} />;
}

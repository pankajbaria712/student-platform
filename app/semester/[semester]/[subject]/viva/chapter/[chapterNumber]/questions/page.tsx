import Link from "next/link";
import Accordion from "@/components/Accordion";
import VivaChapterNavigation from "@/components/VivaChapterNavigation";
import { getVivaData, getVivaSubject } from "@/lib/viva";

export function generateMetadata({ params }: { params: { semester: string; subject: string; chapterNumber: string } }) {
  const vivaSubject = getVivaSubject(params.subject);
  const vivaData = getVivaData(params.subject);
  const chapNum = Number(params.chapterNumber);
  const chapter = vivaData.find((c) => c.chapterNumber === chapNum);

  const title = vivaSubject
    ? `${vivaSubject.title} — Chapter ${chapNum} Viva Questions — Semester ${params.semester} | GTU`
    : "GTU Viva Questions";

  const description = chapter
    ? `${chapter.questions?.length ?? 0} viva questions for ${chapter.chapterName}. Learn concise answers and chapter-wise revision.`
    : `Chapter ${chapNum} viva questions.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://gtustudenthub.vercel.app/semester/${params.semester}/${params.subject}/viva/chapter/${params.chapterNumber}/questions`,
      siteName: "GTU Student Hub",
      images: ["/image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/image.png"],
    },
    alternates: {
      canonical: `https://gtustudenthub.vercel.app/semester/${params.semester}/${params.subject}/viva/chapter/${params.chapterNumber}/questions`,
    },
  } as any;
}

interface Props {
  params: { semester: string; subject: string; chapterNumber: string };
}

export default function QuestionsPage({ params }: Props) {
  const vivaData = getVivaData(params.subject);
  const chapNum = Number(params.chapterNumber);
  const chapter = vivaData.find((c) => c.chapterNumber === chapNum);

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">{chapter.chapterName} — Questions</h1>
            <p className="text-sm text-slate-300">Chapter {chapter.chapterNumber} • {chapter.questions.length} questions</p>
          </div>
          <div>
            <Link href={`/semester/${params.semester}/${params.subject}/viva`} className="text-sky-400 underline">
              Back to Viva Hub
            </Link>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {chapter.questions.map((q, i) => (
            <Accordion key={i} title={`${i + 1}. ${q.question}`}>
              <div className="whitespace-pre-wrap">{q.answer}</div>
            </Accordion>
          ))}
        </div>
        {/* Chapter navigation: start MCQ, next/previous chapter */}
        <VivaChapterNavigation
          currentChapter={Number(params.chapterNumber)}
          totalChapters={getVivaSubject(params.subject)?.chapters?.length ?? 0}
          semester={params.semester}
          subject={params.subject}
          chapters={(getVivaSubject(params.subject)?.chapters ?? []).map((c, idx) => ({
            number: idx + 1,
            title: c.title,
            questionsCount: 0,
            mcqCount: 0,
          }))}
          type="questions"
        />
      </div>
    </div>
  );
}

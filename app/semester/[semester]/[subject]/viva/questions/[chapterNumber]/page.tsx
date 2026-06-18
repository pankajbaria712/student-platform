import Link from "next/link";
import Accordion from "@/components/Accordion";
import { getVivaData } from "@/lib/viva";

interface Props {
  params: { semester: string; subject: string; chapterNumber: string };
}

export default function QuestionsPage({ params }: Props) {
  const vivaData = getVivaData(params.subject);
  const chapNum = Number(params.chapterNumber);
  const chapterIndex = vivaData.findIndex((chapter) => chapter.chapterNumber === chapNum);
  const chapter = vivaData[chapterIndex];

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

  const prevChapter = vivaData[chapterIndex - 1];
  const nextChapter = vivaData[chapterIndex + 1];
  const baseUrl = `/semester/${params.semester}/${params.subject}/viva`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">{chapter.chapterName} — Questions</h1>
            <p className="text-sm text-slate-300">Chapter {chapter.chapterNumber} • {chapter.questions.length} questions</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={baseUrl} className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-slate-800">
              Back to Viva Hub
            </Link>
            <Link href={`${baseUrl}/mcq/${chapter.chapterNumber}`} className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
              Go to MCQ
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <Link
              href={prevChapter ? `${baseUrl}/questions/${prevChapter.chapterNumber}` : "#"}
              className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${prevChapter ? "bg-slate-800 text-slate-100 hover:bg-slate-700" : "cursor-not-allowed bg-slate-900 text-slate-500"}`}
            >
              Previous Chapter
            </Link>
            <Link
              href={nextChapter ? `${baseUrl}/questions/${nextChapter.chapterNumber}` : "#"}
              className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${nextChapter ? "bg-slate-800 text-slate-100 hover:bg-slate-700" : "cursor-not-allowed bg-slate-900 text-slate-500"}`}
            >
              Next Chapter
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
      </div>
    </div>
  );
}

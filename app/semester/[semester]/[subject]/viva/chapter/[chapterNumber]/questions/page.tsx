import { webProgrammingViva } from "@/lib/viva/web-programming-viva";
import Link from "next/link";
import Accordion from "@/components/Accordion";

interface Props {
  params: { semester: string; subject: string; chapterNumber: string };
}

export default function QuestionsPage({ params }: Props) {
  const chapNum = Number(params.chapterNumber);
  const chapter = webProgrammingViva.find((c) => c.chapterNumber === chapNum);

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
      </div>
    </div>
  );
}

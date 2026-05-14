import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function PremiumPage({ params }: Props) {
  const pdfMap: Record<string, string> = {
    "web-programming-solution": "https://your-protected-pdf-url.pdf",
  };

  const pdfUrl = pdfMap[params.slug];

  if (!pdfUrl) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Premium Solution Viewer</h1>

      <div className="rounded-2xl overflow-hidden border border-white/10">
        <iframe src={pdfUrl} className="w-full h-[90vh]" />
      </div>
    </main>
  );
}

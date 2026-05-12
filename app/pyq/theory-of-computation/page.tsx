const pyqPapers = [
  {
    title: "TOC Summer 2025",
    pdf: "/pdfs/pyq/theory-of-computation/toc-summer-2025.pdf",
  },
  {
    title: "TOC Winter 2024",
    pdf: "/pdfs/pyq/theory-of-computation/toc-winter-2024.pdf",
  },
  {
    title: "TOC Summer 2024",
    pdf: "/pdfs/pyq/theory-of-computation/toc-summer-2024.pdf",
  },
  {
    title: "TOC Winter 2023",
    pdf: "/pdfs/pyq/theory-of-computation/toc-winter-2023.pdf",
  },
  {
    title: "TOC Summer 2023",
    pdf: "/pdfs/pyq/theory-of-computation/toc-summer-2023.pdf",
  },
];

export default function PYQPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-gray-900">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-gray-500">
            Semester 6 • 3160704
          </p>
          <h1 className="mt-2 text-4xl font-bold">
            Theory of Computation PYQ Papers
          </h1>
          <p className="mt-3 text-gray-600">
            Previous Year Question Papers for Theory of Computation. Open the
            PDF, read online, and download directly.
          </p>
        </div>

        {/* PYQ List */}
        <div className="space-y-5">
          {pyqPapers.map((paper) => (
            <div
              key={paper.title}
              className="rounded-3xl border border-gray-200 p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{paper.title}</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    University Previous Year Question Paper PDF
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={paper.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-black px-5 py-2 text-sm font-medium text-white"
                  >
                    Open PDF
                  </a>

                  <a
                    href={paper.pdf}
                    download
                    className="rounded-2xl border border-gray-300 px-5 py-2 text-sm font-medium"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Folder Structure Guide */}
      </div>
    </main>
  );
}

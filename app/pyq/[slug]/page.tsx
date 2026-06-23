import { notFound } from "next/navigation";
import { subjectData } from "../_data/subjects";
import { PyqSubjectView } from "../_components/pyq-subject-view";

export function generateStaticParams() {
  return Object.keys(subjectData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const subject = subjectData[params.slug];
  const title = subject
    ? `GTU ${subject.title} PYQ Papers - Semester ${subject.semester}`
    : "GTU PYQ Solutions";
  const description = subject?.description ||
    "Access GTU previous year question papers and solution briefs for core engineering subjects.";

  return {
    title,
    description,
    keywords: [
      subject?.title ?? "GTU PYQ Papers",
      `GTU Semester ${subject?.semester ?? "?"}`,
      "GTU PYQ papers",
      "GTU exam prep",
      "GTU study resources",
    ],
    openGraph: {
      title,
      description,
      url: `https://gtustudenthub.vercel.app/pyq/${params.slug}`,
      images: ["/image.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/image.png"],
    },
    alternates: {
      canonical: `https://gtustudenthub.vercel.app/pyq/${params.slug}`,
    },
  };
}

export default function SubjectPYQPage({
  params,
}: {
  params: { slug: string };
}) {
  const subject = subjectData[params.slug];

  if (!subject) {
    notFound();
  }

  return <PyqSubjectView subject={subject} subjectSlug={params.slug} />;
}

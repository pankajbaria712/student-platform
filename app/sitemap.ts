import { MetadataRoute } from "next";
import { subjectPageData } from "@/app/subject/_data/subjects";
import { subjectData as pyqData } from "@/app/pyq/_data/subjects";
import { getVivaStaticParams, vivaSubjects } from "@/lib/viva";

const BASE_URL = "https://gtustudenthub.vercel.app";
// Prefer canonical semesters used on the site. Include 1-6 for crawlability.
const SEMESTER_ROUTES = ["1", "2", "3", "4", "5", "6"];

function createSitemapEntry(url: string, priority = 0.8): MetadataRoute.SitemapEntry {
  return {
    url,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [
    createSitemapEntry(BASE_URL, 1),
    ...SEMESTER_ROUTES.map((semester) =>
      createSitemapEntry(`${BASE_URL}/semester/${semester}`, 0.9)
    ),
    // Subject landing pages
    ...Object.values(subjectPageData).map((subject) =>
      createSitemapEntry(`${BASE_URL}/subject/${subject.slug}`, 0.86)
    ),
    ...Object.values(subjectPageData)
      .filter((subject) => subject.notesStatus !== "not-applicable" && subject.notesSlug)
      .map((subject) =>
        createSitemapEntry(`${BASE_URL}/notes/${subject.slug}`, 0.8)
      ),
    ...Object.keys(pyqData).map((slug) =>
      createSitemapEntry(`${BASE_URL}/pyq/${slug}`, 0.85)
    ),
    // Notes pages for subjects where notes are applicable
    ...Object.values(subjectPageData)
      .filter((subject) => subject.notesStatus !== "not-applicable" && subject.notesSlug)
      .map((subject) => createSitemapEntry(`${BASE_URL}/notes/${subject.slug}`, 0.82)),
    ...getVivaStaticParams().map((params) =>
      createSitemapEntry(
        `${BASE_URL}/semester/${params.semester}/${params.subject}/viva`,
        0.85
      )
    ),
  ];

  for (const subject of Object.values(vivaSubjects)) {
    if (!subject.chapters?.length) continue;

    for (const chapter of subject.chapters) {
      const chapterNumber = String(chapter.slug).split("-").pop();
      if (!chapterNumber) continue;

      urls.push(
        createSitemapEntry(
          `${BASE_URL}/semester/${subject.semester}/${subject.slug}/viva/chapter/${chapterNumber}/questions`,
          0.7
        )
      );
      urls.push(
        createSitemapEntry(
          `${BASE_URL}/semester/${subject.semester}/${subject.slug}/viva/chapter/${chapterNumber}/mcq`,
          0.7
        )
      );
    }
    // Add viva landing page for subject
    urls.push(
      createSitemapEntry(
        `${BASE_URL}/semester/${subject.semester}/${subject.slug}/viva`,
        0.78
      )
    );
  }

  return urls;
}

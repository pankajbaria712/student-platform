import { MetadataRoute } from "next";
import { subjectPageData } from "@/app/subject/_data/subjects";
import { subjectData as pyqData } from "@/app/pyq/_data/subjects";
import { getVivaStaticParams, vivaSubjects } from "@/lib/viva";

const BASE_URL = "https://gtustudenthub.vercel.app";
// Prefer canonical semesters used on the site. Include 1-6 for crawlability.
const SEMESTER_ROUTES = ["1", "2", "3", "4", "5", "6"];

function createSitemapEntry(url: string, priority = 0.8): MetadataRoute.Sitemap[number] {
  return {
    url,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  const seenUrls = new Set<string>();

  const addUrl = (url: string, priority = 0.8) => {
    if (seenUrls.has(url)) return;
    seenUrls.add(url);
    urls.push(createSitemapEntry(url, priority));
  };

  addUrl(BASE_URL, 1);

  SEMESTER_ROUTES.forEach((semester) => {
    addUrl(`${BASE_URL}/semester/${semester}`, 0.9);
  });

  Object.values(subjectPageData).forEach((subject) => {
    addUrl(`${BASE_URL}/subject/${subject.slug}`, 0.86);

    if (subject.notesStatus !== "not-applicable" && subject.notesSlug) {
      addUrl(`${BASE_URL}/notes/${subject.slug}`, 0.8);
    }
  });

  Object.keys(pyqData).forEach((slug) => {
    addUrl(`${BASE_URL}/pyq/${slug}`, 0.85);
  });

  getVivaStaticParams().forEach((params) => {
    addUrl(`${BASE_URL}/semester/${params.semester}/${params.subject}/viva`, 0.85);
  });

  Object.values(vivaSubjects).forEach((subject) => {
    if (!subject.chapters?.length) return;

    subject.chapters.forEach((chapter) => {
      const chapterNumber = String(chapter.slug).split("-").pop();
      if (!chapterNumber) return;

      addUrl(
        `${BASE_URL}/semester/${subject.semester}/${subject.slug}/viva/chapter/${chapterNumber}/questions`,
        0.7
      );
      addUrl(
        `${BASE_URL}/semester/${subject.semester}/${subject.slug}/viva/chapter/${chapterNumber}/mcq`,
        0.7
      );
    });

    addUrl(`${BASE_URL}/semester/${subject.semester}/${subject.slug}/viva`, 0.78);
  });

  return urls;
}

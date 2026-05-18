import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const papers = [
  { slug: "winter-2025", file: "ipdc-winter-2025.pdf" },
  { slug: "summer-2025", file: "ipdc-summer-2025.pdf" },
  { slug: "winter-2024", file: "ipdc-winter-2024.pdf" },
  { slug: "summer-2024", file: "ipdc-summer-2024.pdf" },
  { slug: "winter-2023", file: "ipdc-winter-2023.pdf" },
];
for (const paper of papers) {
  const filePath = path.join(
    __dirname,
    "..",
    "public",
    "pdfs",
    "pyq",
    "integrated-personality-development-course",
    paper.file,
  );
  const data = new Uint8Array(fs.readFileSync(filePath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;
  const pages = [];
  for (let i = 1; i <= pdf.numPages; i += 1) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map((item) => item.str).join(" ");
    pages.push(pageText);
    console.log(
      `${paper.slug.toUpperCase()} PAGE ${i}:`,
      pageText.slice(0, 240),
    );
  }
  fs.writeFileSync(
    path.join(__dirname, `ipdc-${paper.slug}-pages.json`),
    JSON.stringify(pages, null, 2),
    "utf8",
  );
  console.log(`Saved pages to scripts/ipdc-${paper.slug}-pages.json`);
}

const fs = require("fs");
const path = require("path");
const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.js");
const filePath = path.join(
  __dirname,
  "..",
  "public",
  "pdfs",
  "pyq",
  "integrated-personality-development-course",
  "ipdc-winter-2025.pdf",
);
const data = new Uint8Array(fs.readFileSync(filePath));
(async () => {
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;
  const pages = [];
  for (let i = 1; i <= pdf.numPages; i += 1) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map((item) => item.str).join(" ");
    pages.push(pageText);
    console.log(`PAGE ${i}:`, pageText.slice(0, 320));
  }
  fs.writeFileSync(
    path.join(__dirname, "ipdc-winter-2025-pages.json"),
    JSON.stringify(pages, null, 2),
    "utf8",
  );
  console.log("Saved pages to scripts/ipdc-winter-2025-pages.json");
})();

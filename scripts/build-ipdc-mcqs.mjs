import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const papers = [
  { slug: "winter-2025", file: "ipdc-winter-2025-pages.json" },
  { slug: "summer-2025", file: "ipdc-summer-2025-pages.json" },
  { slug: "winter-2024", file: "ipdc-winter-2024-pages.json" },
  { slug: "summer-2024", file: "ipdc-summer-2024-pages.json" },
  { slug: "winter-2023", file: "ipdc-winter-2023-pages.json" },
];
function parseQuestions(pageText) {
  const lines = pageText.split("\n").filter((line) => line.trim().length > 0);
  const questions = [];
  let currentQuestion = null;
  for (const line of lines) {
    const match = line.match(/^(\d+)\.\s+(.+)$/);
    if (match) {
      if (currentQuestion) questions.push(currentQuestion);
      currentQuestion = {
        id: parseInt(match[1], 10),
        question: match[2].trim(),
        options: [],
      };
    } else if (currentQuestion && line.match(/^[a-d]\.\s+/)) {
      const optionMatch = line.match(/^[a-d]\.\s+(.+)$/);
      if (optionMatch) {
        currentQuestion.options.push(optionMatch[1].trim());
      }
    }
  }
  if (currentQuestion) questions.push(currentQuestion);
  return questions;
}
const allMcqs = {};
for (const paper of papers) {
  const pagesPath = path.join(__dirname, paper.file);
  if (!fs.existsSync(pagesPath)) {
    console.log(`Skipping ${paper.file}: not found`);
    continue;
  }
  const pages = JSON.parse(fs.readFileSync(pagesPath, "utf8"));
  const fullText = pages.join("\n");
  const allQuestions = parseQuestions(fullText);
  const sectionAQuestions = allQuestions.slice(0, 10).map((q) => ({
    ...q,
    section: "A",
  }));
  const sectionBQuestions = allQuestions.slice(10, 25).map((q) => ({
    ...q,
    section: "B",
  }));
  const sectionCQuestions = allQuestions.slice(25, 40).map((q) => ({
    ...q,
    section: "C",
  }));
  allMcqs[paper.slug] = {
    title: `IPDC ${paper.slug.replace(/-/g, " ").toUpperCase()}`,
    slug: paper.slug,
    totalQuestions: 40,
    sections: {
      A: { marks: 10, questions: sectionAQuestions },
      B: { marks: 30, questions: sectionBQuestions },
      C: { marks: 30, questions: sectionCQuestions },
    },
    allQuestions: allQuestions,
  };
  console.log(
    `✓ Parsed ${paper.slug}: ${allQuestions.length} questions extracted`,
  );
  console.log(
    `  Sample Q${allQuestions[0].id}: ${allQuestions[0].question.slice(0, 80)}...`,
  );
}
fs.writeFileSync(
  path.join(__dirname, "ipdc-all-mcqs.json"),
  JSON.stringify(allMcqs, null, 2),
  "utf8",
);
console.log("\n✓ Saved consolidated MCQs to scripts/ipdc-all-mcqs.json");
console.log(`  Papers: ${Object.keys(allMcqs).length}`);

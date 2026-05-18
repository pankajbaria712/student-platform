const fs = require("fs");
const path = require("path");
const source = fs.readFileSync(
  path.join(
    "node_modules",
    "pdf-parse",
    "dist",
    "pdf-parse",
    "cjs",
    "index.cjs",
  ),
  "utf8",
);
const keywords = [
  "parseBuffer",
  "parse(",
  "parseData",
  "getDocument",
  "PDFParse",
];
for (const keyword of keywords) {
  const idx = source.indexOf(keyword);
  console.log(keyword, idx === -1 ? "not found" : `found at ${idx}`);
}
console.log(source.slice(0, 2000));

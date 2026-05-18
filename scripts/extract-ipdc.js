const fs = require("fs");
const pdfParse = require("pdf-parse");
const filePath =
  "./public/pdfs/pyq/integrated-personality-development-course/ipdc-winter-2025.pdf";
const dataBuffer = fs.readFileSync(filePath);
pdfParse(dataBuffer)
  .then((data) => {
    console.log("pages:", data.numpages);
    console.log(data.text);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

import { routeRecords } from "./batch-3.mjs";

function stripAndCount(html) {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&[a-z]+;/g, " ");
  const words = text.split(/\s+/).filter(Boolean);
  return words.length;
}

let allOk = true;
routeRecords.forEach((r, i) => {
  const enCount = stripAndCount(r.contentEn);
  const esCount = stripAndCount(r.contentEs);
  const enOk = enCount >= 900 && enCount <= 1300;
  const esOk = esCount >= 900 && esCount <= 1300;
  if (!enOk || !esOk) allOk = false;
  console.log(`${i + 1}. ${r.slugEn}`);
  console.log(`   EN: ${enCount} words ${enOk ? "OK" : "OUT OF RANGE"}`);
  console.log(`   ES: ${esCount} words ${esOk ? "OK" : "OUT OF RANGE"}`);
});
console.log(allOk ? "\nALL RECORDS WITHIN 900-1300 WORDS" : "\nSOME RECORDS OUT OF RANGE");

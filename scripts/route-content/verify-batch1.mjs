import { routeRecords } from "./batch-1.mjs";

function wordCount(html) {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return text.split(" ").filter(Boolean).length;
}

let allOk = true;
routeRecords.forEach((r, i) => {
  const wEn = wordCount(r.contentEn);
  const wEs = wordCount(r.contentEs);
  const metaEnLen = r.metaDescriptionEn.length;
  const metaEsLen = r.metaDescriptionEs.length;
  const enOk = wEn >= 900 && wEn <= 1300;
  const esOk = wEs >= 900 && wEs <= 1300;
  console.log(`Record ${i + 1} (${r.destinationNameEn}):`);
  console.log(`  contentEn words: ${wEn} ${enOk ? "OK" : "*** OUT OF RANGE ***"}`);
  console.log(`  contentEs words: ${wEs} ${esOk ? "OK" : "*** OUT OF RANGE ***"}`);
  console.log(`  metaDescriptionEn length: ${metaEnLen} chars`);
  console.log(`  metaDescriptionEs length: ${metaEsLen} chars`);
  if (!enOk || !esOk) allOk = false;
});
console.log(allOk ? "\nALL CONTENT WORD COUNTS PASS" : "\nSOME RECORDS FAIL WORD COUNT");

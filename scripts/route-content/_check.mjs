import fs from "node:fs";

const expected = {
  "batch-1.mjs": 5,
  "batch-2.mjs": 5,
  "batch-3.mjs": 5,
  "batch-4.mjs": 5,
  "batch-5.mjs": 7,
  "batch-6.mjs": 7,
  "batch-7.mjs": 7,
  "batch-8.mjs": 7,
  "batch-9.mjs": 8,
  "batch-10.mjs": 4,
};

for (const [file, expectedCount] of Object.entries(expected)) {
  const path = `./${file}`;
  if (!fs.existsSync(path)) {
    console.log(`${file}: MISSING`);
    continue;
  }
  try {
    const mod = await import(path);
    const records = mod.routeRecords;
    if (!Array.isArray(records)) {
      console.log(`${file}: NOT AN ARRAY`);
      continue;
    }
    const status = records.length === expectedCount ? "OK" : "COUNT MISMATCH";
    console.log(`${file}: ${records.length}/${expectedCount} records - ${status}`);
    for (const r of records) {
      const missing = [
        "kind", "direction", "originCitySlug", "slugEn", "slugEs",
        "originNameEn", "originNameEs", "destinationNameEn", "destinationNameEs",
        "driveTime", "titleEn", "titleEs", "seoTitleEn", "seoTitleEs",
        "metaDescriptionEn", "metaDescriptionEs", "contentEn", "contentEs",
        "faqEn", "faqEs", "imageUrl", "imageAltEn", "imageAltEs",
      ].filter((k) => r[k] === undefined || r[k] === null || r[k] === "");
      if (missing.length > 0) {
        console.log(`  ! ${r.slugEn ?? "(no slug)"} missing fields: ${missing.join(", ")}`);
      }
    }
  } catch (err) {
    console.log(`${file}: IMPORT ERROR - ${err.message}`);
  }
}

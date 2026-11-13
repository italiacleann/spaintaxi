# Route URL Inventory: URLs Missing From the Search Console Exports (Nov 2026)

Prepared 13 Nov 2026. Data file: [route-url-inventory-2026-11.csv](route-url-inventory-2026-11.csv) (one row per URL).

**No action has been taken on any of these URLs.** This inventory is for review only. Nothing here has been consolidated, redirected or noindexed, apart from the 5 URLs already covered by the approved November merges (group A).

## What this covers

The site had **1,560 route URLs** (780 routes × EN + ES) when the Search Console exports were taken. **688** of them appear in neither file:

- the 3-month Performance export (pages with impressions, 11 Aug – 10 Nov 2026), or
- the "Crawled – currently not indexed" drilldown (95 URLs).

**Their indexing status is unknown, not "not indexed".** The Performance export stops at 1,000 rows, so some of these URLs may be indexed with very few impressions. Others may be "Discovered – currently not indexed" or have another status. To find out, export Search Console's **Page indexing → Indexed pages** list and the **"Discovered – currently not indexed"** list, or inspect a sample of URLs with the URL Inspection tool.

## Columns in the CSV

| Column | Meaning |
|---|---|
| url, lang | The URL and its language |
| city, kind, direction | Route cluster, page type (hotel, attraction, day-trip, city, cruise-port, train-station) and direction |
| origin, destination | Route endpoints |
| words | Word count of this language version's main content |
| otherLanguageStatus | Status of the same route in the other language: `impressions:N`, `crawled-not-indexed` or `unknown` |
| reverseUrl, reverseStatus | The opposite-direction route in the same language, and its status |
| inboundLinks | Number of pages linking to this URL in the latest build |
| lastmod | Content last-changed date from `lib/seo/lastmod.json` |
| currentState | `live`, or the redirect target if already merged |
| reviewGroup | A–E grouping below (a review aid, not a decision) |

## Review groups

| Group | Meaning | URLs |
|---|---|---|
| A | Already merged under the approved November consolidation (now redirects) | 5 |
| B | Both the other-language version and the reverse route have impressions | 84 |
| C | Only the other-language version has impressions | 181 |
| D | Only the reverse route has impressions | 84 |
| E | No visibility data for this route in any language or direction | 334 |

Groups B–D are routes Google already shows in some form, so the unknown URL is a sibling of a page that works. Group E is where the least evidence of value exists.

## Where group E is concentrated

| City cluster | Total unknown | Group E |
|---|---|---|
| Bilbao | 82 | 66 |
| Zaragoza | 76 | 63 |
| Ibiza | 71 | 62 |
| Palma | 69 | 21 |
| Gran Canaria | 48 | 24 |
| Santa Cruz de Tenerife | 28 | 15 |
| Alicante | 43 | 13 |
| Tenerife | 24 | 12 |
| Valencia | 44 | 9 |
| Barcelona | 38 | 9 |
| Málaga | 45 | 8 |
| Granada | 37 | 8 |
| Córdoba | 17 | 7 |
| San Sebastián | 7 | 6 |
| Madrid | 13 | 5 |
| Seville | 35 | 4 |
| Las Palmas de Gran Canaria | 11 | 2 |

Bilbao, Zaragoza and Ibiza account for 191 of the 334 group-E URLs (57%). By page type, group E is mostly attraction pages (133) and day trips (57). 147 group-E URLs have two or fewer inbound internal links, and their median length is about 1,170 words.

## Suggested next steps (for decision, not implemented)

1. **Get the real status first.** Export Search Console's indexed and "Discovered – currently not indexed" lists and join them to the CSV on `url`. Until then, group E is "no data", not "no value".
2. **Start any review with Bilbao, Zaragoza and Ibiza**, where group E is concentrated. Apply the same tests used for the 95 audited URLs: distinct search intent, padding vs real logistics, and whether a sibling page already satisfies the intent.
3. **Leave groups B–D alone for now.** Their siblings are already visible, and changing them risks working pages.

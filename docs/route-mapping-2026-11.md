# Route Mapping: Merges, Deferred Destinations and Retained Pairs (Nov 2026)

Status as of 13 Nov 2026, in the uncommitted working tree. This covers the approved scope from the SEO Recovery Plan: 9 merges implemented, 2 deferred, and 16 pairs retained and improved.

## 1. Route merges implemented (9 pairs, 18 redirects)

For each pair, the destination page in **both** languages gained a "Returning to the airport" section and 3 departure FAQs, built from the source page's verifiable details. Unverifiable or incorrect source claims were not carried over: "guaranteed pickup", departure "flight tracking", daily flight counts, hotel staff practices, and a wrong "metro needs a change" claim for Valencia Colón.

After that, the source records were removed from `lib/routes/data/*.ts`. That removes them from the sitemap, hub pages and related-route lists. Each source URL now redirects permanently (308) in one hop to the matching-language destination, via `lib/seo/redirects.ts` and `proxy.ts`. No hardcoded links pointed at the removed URLs.

| # | Source EN → destination EN | Source ES → destination ES | Source search evidence (EN / ES impr.) | Destination status at export |
|---|---|---|---|---|
| 1 | `/casa-batllo-to-barcelona-airport/` → `/barcelona-airport-to-casa-batllo/` | `/es/casa-batllo-al-aeropuerto-de-barcelona/` → `/es/traslado-aeropuerto-barcelona-a-casa-batllo/` | 0 / 0 | EN indexed (14 impr.) |
| 2 | `/hotel-arts-barcelona-to-barcelona-airport/` → `/barcelona-airport-to-hotel-arts-barcelona/` | `/es/hotel-arts-barcelona-al-aeropuerto-de-barcelona/` → `/es/traslado-aeropuerto-barcelona-a-hotel-arts-barcelona/` | 6 / 0 | ES indexed (6 impr.) |
| 3 | `/w-barcelona-to-barcelona-airport/` → `/barcelona-airport-to-w-barcelona/` | `/es/w-barcelona-al-aeropuerto-de-barcelona/` → `/es/traslado-aeropuerto-barcelona-a-w-barcelona/` | 8 / 0 | ES indexed (5 impr.) |
| 4 | `/the-artist-grand-hotel-to-bilbao-airport/` → `/bilbao-airport-to-the-artist-grand-hotel/` | `/es/the-artist-grand-hotel-al-aeropuerto-de-bilbao/` → `/es/traslado-aeropuerto-bilbao-a-the-artist-grand-hotel/` | 0 / 0 | Unknown (not in either export) |
| 5 | `/puerto-rico-to-gran-canaria-airport/` → `/gran-canaria-airport-to-puerto-rico/` | `/es/puerto-rico-al-aeropuerto-de-gran-canaria/` → `/es/traslado-aeropuerto-gran-canaria-a-puerto-rico/` | 0 / 2 | EN indexed (31 impr.) |
| 6 | `/ibiza-town-to-ibiza-airport/` → `/ibiza-airport-to-ibiza-town/` | `/es/ibiza-ciudad-a-aeropuerto-ibiza/` → `/es/aeropuerto-ibiza-a-ibiza-ciudad/` | 0 / 0 | Unknown |
| 7 | `/ilunion-malaga-to-malaga-airport/` → `/malaga-airport-to-ilunion-malaga/` | `/es/ilunion-malaga-al-aeropuerto-de-malaga/` → `/es/traslado-aeropuerto-malaga-a-ilunion-malaga/` | 7 / 0 | EN indexed (33 impr.) |
| 8 | `/hondarribia-to-san-sebastian-airport/` → `/san-sebastian-airport-to-hondarribia/` | `/es/hondarribia-al-aeropuerto-de-san-sebastian/` → `/es/traslado-aeropuerto-san-sebastian-a-hondarribia/` | 0 / 0 | Unknown |
| 9 | `/nh-collection-valencia-colon-to-valencia-airport/` → `/valencia-airport-to-nh-collection-valencia-colon/` | `/es/nh-collection-valencia-colon-al-aeropuerto-de-valencia/` → `/es/traslado-aeropuerto-valencia-a-nh-collection-valencia-colon/` | 5 / 0 | ES indexed (7 impr.) |

**Reverse direction:** each destination *is* the reverse-direction route of its source. Each destination now covers both directions: the original arrival content plus the new departure section and FAQs.

**hreflang:** each destination pair keeps its own reciprocal EN/ES hreflang. Both languages of each source move together, so no orphaned alternates remain.

## 2. Deferred merges (not redirected)

| Source pair (still live) | Proposed destination pair | Destination status at export | What was done | Status now |
|---|---|---|---|---|
| `/mandarin-oriental-ritz-madrid-to-madrid-airport/` / `/es/mandarin-oriental-ritz-madrid-al-aeropuerto-de-madrid/` | `/madrid-airport-to-mandarin-oriental-ritz-madrid/` / `/es/traslado-aeropuerto-madrid-a-mandarin-oriental-ritz-madrid/` | EN crawled, not indexed | See below | Improved; waiting for reindexing |
| `/barcelo-torre-de-madrid-to-madrid-airport/` / `/es/barcelo-torre-de-madrid-al-aeropuerto-de-madrid/` | `/madrid-airport-to-barcelo-torre-de-madrid/` / `/es/traslado-aeropuerto-madrid-a-barcelo-torre-de-madrid/` | ES crawled, not indexed | See below | Improved; waiting for reindexing |

**What was done to both destination pages (EN + ES):**
- Removed the hotel and neighbourhood-history sections. Mandarin Oriental Ritz went from about 1,150 to about 740–860 words; Barceló Torre from about 1,180–1,330 to about 650–760.
- Added an "Arriving at Madrid-Barajas" section (terminals, meeting point, flight monitoring and waiting time per the terms).
- Added a "Returning to the airport" section, using the departure details from the source pages.
- Replaced the hotel-trivia FAQs with transfer FAQs.
- Updated the meta descriptions.

**Technical checks:** both pages pass the post-build checks: self-canonical, reciprocal hreflang, one H1, valid JSON-LD, and visible and structured breadcrumbs that match.

**Next step:** request reindexing of the four destination URLs in Search Console. Revisit the merge once Google has re-crawled them. If they become indexed, the merge can go ahead as planned; if not, keeping the source pages costs nothing.

## 3. Retained and improved (16 pairs)

The stronger language version of each pair (the one with more impressions) is **unchanged**; this was verified byte-for-byte against the committed version. Only the weaker version was rewritten:
- an answer-first departure summary at the top (drive time, distance, pickup point, grace period);
- travel-guide sections removed;
- trivia FAQs removed.

| # | Route pair (EN / ES) | Impr. EN / ES | Version rewritten | Words before → after |
|---|---|---|---|---|
| 1 | `/majestic-hotel-barcelona-to-barcelona-airport/` / `/es/majestic-hotel-barcelona-al-aeropuerto-de-barcelona/` | 21 / 0 | ES | 1,159 → 995 |
| 2 | `/gothic-quarter-to-barcelona-airport/` / `/es/barrio-gotico-al-aeropuerto-de-barcelona/` | 40 / 0 | ES | 1,190 → 752 |
| 3 | `/nh-collection-madrid-suecia-to-madrid-airport/` / `/es/nh-collection-madrid-suecia-al-aeropuerto-de-madrid/` | 15 / 0 | ES | 1,312 → 942 |
| 4 | `/only-you-hotel-atocha-to-madrid-airport/` / `/es/only-you-hotel-atocha-al-aeropuerto-de-madrid/` | 40 / 0 | ES | 1,325 → 1,409 (summary added; already logistics-focused) |
| 5 | `/royal-palace-madrid-to-madrid-airport/` / `/es/palacio-real-madrid-al-aeropuerto-de-madrid/` | 14 / 7 | ES | 1,074 → 753 |
| 6 | `/puerta-del-sol-to-madrid-airport/` / `/es/puerta-del-sol-al-aeropuerto-de-madrid/` | 11 / 6 | ES | 1,067 → 709 |
| 7 | `/riu-plaza-espana-to-madrid-airport/` / `/es/riu-plaza-espana-al-aeropuerto-de-madrid/` | 98 / 66 | ES | 1,279 → 1,233 |
| 8 | `/vp-plaza-espana-design-to-madrid-airport/` / `/es/vp-plaza-espana-design-al-aeropuerto-de-madrid/` | 22 / 7 | ES | 1,255 → 1,199 |
| 9 | `/westin-palace-madrid-to-madrid-airport/` / `/es/westin-palace-madrid-al-aeropuerto-de-madrid/` | 14 / 0 | ES | 1,295 → 830 |
| 10 | `/plaza-mayor-to-madrid-airport/` / `/es/plaza-mayor-al-aeropuerto-de-madrid/` | 31 / 4 | ES | 1,110 → 733 |
| 11 | `/retiro-park-to-madrid-airport/` / `/es/parque-del-retiro-al-aeropuerto-de-madrid/` | 6 / 14 | EN | 1,057 → 437 (intro rewritten; removed a misleading "flight tracking" claim) |
| 12 | `/benalmadena-to-malaga-airport/` / `/es/benalmadena-al-aeropuerto-de-malaga/` | 32 / 0 | ES | 1,281 → 829 |
| 13 | `/nerja-to-malaga-airport/` / `/es/nerja-al-aeropuerto-de-malaga/` | 21 / 0 | ES | 1,236 → 609 |
| 14 | `/gran-hotel-miramar-to-malaga-airport/` / `/es/gran-hotel-miramar-al-aeropuerto-de-malaga/` | 24 / 0 | ES | 1,452 → 1,133 |
| 15 | `/melia-valencia-to-valencia-airport/` / `/es/melia-valencia-al-aeropuerto-de-valencia/` | 31 / 8 | ES | 1,404 → 1,485 (summary added; already logistics-focused) |
| 16 | `/sagunto-to-valencia-airport/` / `/es/sagunto-al-aeropuerto-de-valencia/` | 10 / 12 | EN | 1,177 → 620 (intro rewritten around the page's stated pickup points) |

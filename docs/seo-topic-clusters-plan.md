# spaintaxi — SEO Topic Cluster Plan

Standing reference for blog content on spaintaxi.com. Built from
`docs/seo-audit-2026.md` (inventory) and `docs/seo-content-gap-analysis.md`
(gap analysis) — every topic here is verified new against the 12 already-
published posts. Follow the same execution discipline used on
italytaxiservice.com: re-query the live `blog_posts` table before starting
any batch (this plan can drift out of sync with what's actually published),
publish in small batches (1–3 posts at a time, both languages together per
post since the schema is single-row bilingual), fact-check every specific
claim (drive times, distances, prices) rather than inventing one, and
submit new URLs to Bing/Google after each batch.

**Status:** Planning complete. 0 of 19 topics published as of 2026-09-11.

## How to use this plan

- **Priority** = suggested publishing order (High = existing route
  infrastructure + high route-page count = strongest internal-link value).
- Each row's **Internal Links** column lists what the post should link to.
  After publishing, add the reverse link too — see the `RELATED_BLOG_LINKS`
  fix in the audit (§1); until that fix ships, at minimum confirm the new
  post doesn't get lost only-linked-to-never-linked-from.
- Slugs are `_en` shown; the ES sibling slug goes in the same row (`slug_es`
  column) at write time, translated naturally, not literally — same rule as
  italytaxiservice's Italian content.

---

## Block 1 — City Transfer Guides

Mirrors the two already-published posts (`private-transfer-madrid-guide`,
`private-transfer-barcelona-guide`) — general "how private transport works
in this city" guides for the next 9 cities with live route infrastructure.

| # | Title (en) | Primary Keyword | Intent | Slug | Internal Links | Priority |
|---|---|---|---|---|---|---|
| 1 | Private Transport in Valencia: The Complete Guide | private transfer valencia | Commercial | `private-transfer-valencia-guide` | /valencia city page, Valencia airport page, top 2-3 Valencia route pages, /airport-transfers | High |
| 2 | Private Transport in Palma de Mallorca: The Complete Guide | private transfer palma mallorca | Commercial | `private-transfer-palma-guide` | /palma city page, Palma airport page, top Palma route pages, /airport-transfers | High |
| 3 | Private Transport in Málaga: The Complete Guide | private transfer malaga | Commercial | `private-transfer-malaga-guide` | /malaga city page, Malaga airport page, top Malaga route pages, /cruise-port-transfers (Malaga has cruise) | High |
| 4 | Private Transport in Seville: The Complete Guide | private transfer seville | Commercial | `private-transfer-seville-guide` | /seville city page, Seville airport page, top Seville route pages | High |
| 5 | Private Transport in Alicante: The Complete Guide | private transfer alicante | Commercial | `private-transfer-alicante-guide` | /alicante city page, Alicante airport page, top Alicante route pages | High |
| 6 | Private Transport in Granada: The Complete Guide | private transfer granada | Commercial | `private-transfer-granada-guide` | /granada city page, top Granada route pages | Medium |
| 7 | Private Transport in Bilbao: The Complete Guide | private transfer bilbao | Commercial | `private-transfer-bilbao-guide` | /bilbao city page, Bilbao airport page, top Bilbao route pages | Medium |
| 8 | Private Transport in Zaragoza: The Complete Guide | private transfer zaragoza | Commercial | `private-transfer-zaragoza-guide` | /zaragoza city page, top Zaragoza route pages | Medium |
| 9 | Private Transport in Ibiza: The Complete Guide | private transfer ibiza | Commercial | `private-transfer-ibiza-guide` | /ibiza city page, Ibiza airport page, top Ibiza route pages — note real seasonal pricing/demand swing, don't invent a flat rate | Medium |

## Block 2 — Airport Arrival Guides

Mirrors the one already-published route-specific post
(`barcelona-airport-to-city-centre-transfer-guide`). Angle: practical
arrival logistics (terminal layout if verifiable, transfer options
compared, real drive time), not a rehash of the airport page's own facts.

| # | Title (en) | Primary Keyword | Intent | Slug | Internal Links | Priority |
|---|---|---|---|---|---|---|
| 1 | Best Way from Madrid Airport to the City Centre (2026 Guide) | madrid airport to city centre | Transactional | `madrid-airport-to-city-centre-transfer-guide` | Madrid airport page, /private-transfer-madrid-guide, top Madrid airport route | High |
| 2 | Best Way from Málaga Airport to the City Centre | malaga airport transfer | Transactional | `malaga-airport-to-city-centre-transfer-guide` | Malaga airport page, /private-transfer-malaga-guide | High |
| 3 | Alicante Airport Transfer Guide: Getting to the City and the Costa Blanca | alicante airport taxi | Transactional | `alicante-airport-transfer-guide` | Alicante airport page, /private-transfer-alicante-guide | High |
| 4 | Valencia Airport Transfer Guide | valencia airport transfer | Transactional | `valencia-airport-transfer-guide` | Valencia airport page, /private-transfer-valencia-guide | Medium |
| 5 | Seville Airport Transfer Guide | seville airport transfer | Transactional | `seville-airport-transfer-guide` | Seville airport page, /private-transfer-seville-guide | Medium |
| 6 | Bilbao Airport Transfer Guide | bilbao airport taxi | Transactional | `bilbao-airport-transfer-guide` | Bilbao airport page, /private-transfer-bilbao-guide | Medium |
| 7 | Palma de Mallorca Airport Transfer Guide | palma airport transfer | Transactional | `palma-airport-transfer-guide` | Palma airport page, /private-transfer-palma-guide | Medium |
| 8 | Ibiza Airport Transfer Guide: Peak Season and Off-Season | ibiza airport transfer | Transactional | `ibiza-airport-transfer-guide` | Ibiza airport page, /private-transfer-ibiza-guide — verify seasonal demand claims, don't invent | Medium |
| 9 | Gran Canaria Airport Transfer Guide | gran canaria airport transfer | Transactional | `gran-canaria-airport-transfer-guide` | Gran Canaria airport page | Low–Medium |
| 10 | Tenerife South Airport Transfer Guide | tenerife south airport transfer | Transactional | `tenerife-south-airport-transfer-guide` | Tenerife South airport page | Low–Medium |

## Block 3 — Cruise Port Transfer Guides

Zero existing coverage despite `/cruise-port-transfers` being a live,
unsupported service page — same "service page with no funnel content"
pattern the original playbook flags as high-priority.

| # | Title (en) | Primary Keyword | Intent | Slug | Internal Links | Priority |
|---|---|---|---|---|---|---|
| 1 | Barcelona Cruise Port Transfers: The Complete Guide | barcelona cruise port transfer | Transactional | `barcelona-cruise-port-transfer-guide` | /cruise-port-transfers, Barcelona airport page, /private-transfer-barcelona-guide | High |
| 2 | Málaga Cruise Port Transfers: The Complete Guide | malaga cruise port transfer | Transactional | `malaga-cruise-port-transfer-guide` | /cruise-port-transfers, Malaga airport page | Medium |
| 3 | Palma Cruise Port Transfers: The Complete Guide | palma cruise port transfer | Transactional | `palma-cruise-port-transfer-guide` | /cruise-port-transfers, Palma airport page | Medium |

## Block 4 — Arrival & Logistics FAQs

Start this block only after Blocks 1–2 give it real posts to link to/from —
these are highest-conversion but lowest standalone internal-link value
until the city/airport base exists.

| # | Title (en) | Primary Keyword | Intent | Slug | Internal Links | Priority |
|---|---|---|---|---|---|---|
| 1 | What Happens If Your Flight to Spain Is Delayed? | flight delay airport transfer spain | Informational | `flight-delay-airport-transfer-spain` | /airport-transfers, 2-3 airport guides from Block 2 | High |
| 2 | Where Do You Meet Your Driver at Madrid and Barcelona Airport? | meet driver madrid barcelona airport | Informational | `meet-driver-madrid-barcelona-airport` | Madrid + Barcelona airport pages, their Block-2 guides | High |
| 3 | First Time in Ibiza: Transfers in Peak vs Off-Season | ibiza transfer peak season | Informational | `ibiza-transfers-peak-off-season` | /private-transfer-ibiza-guide, Ibiza airport guide | Medium |
| 4 | Night Arrivals in Spain: Is a Private Transfer Available at 2am? | night arrival taxi spain | Informational | `night-arrival-transfer-spain` | /airport-transfers, /are-private-airport-transfers-worth-it | Medium |

---

## Execution order

1. **Fix `RELATED_BLOG_LINKS` first** (or in parallel) — see audit §1. Make
   it a lookup keyed by city/airport slug with the current 3-post array as
   the fallback, so each new post below starts getting linked *from* its
   relevant route pages as soon as it's published, not retrofitted later.
2. Block 1, rows 1–5 (Valencia, Palma, Málaga, Seville, Alicante) — highest
   route-page counts, strongest existing infrastructure to link into.
3. Block 2, rows 1–3 (Madrid, Málaga, Alicante) — pairs naturally with the
   Block 1 posts just published for the same cities.
4. Block 3 (all 3 cruise guides) — smaller block, clears the "zero cruise
   content" gap in one pass.
5. Block 1 rows 6–9 + Block 2 rows 4–10 — remaining medium-priority cities/
   airports.
6. Block 4 — once the above gives it something to link to.

Each step is itself 2-3 posts at a time, not the whole row range in one
batch — same discipline as italytaxiservice.

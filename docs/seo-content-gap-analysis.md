# Content Gap Analysis — spaintaxi.com

> Audited against ALL published content (Sep 2026): 54 airports, 36 cities,
> ~656 route pages across 11 city hubs, 12 blog posts, 12 service pages.
> Every topic below is verified new against the 12-post inventory in
> `docs/seo-audit-2026.md` §3 — no topic here duplicates an existing post's
> actual angle, not just its title.
>
> Difficulty: L = low (long-tail, weak competition), M = medium, H = high.
> Sorted by: Route-Infrastructure-Ready (does a page already exist to link
> to and from?) → Booking Intent → Internal-Link Value.

---

## Gap analysis — where the white space is

**Fully covered (do not recreate):** generic Spain-wide airport-transfer
overviews, generic taxi-vs-Uber-vs-private-transfer comparisons, generic
booking-mistake listicles, generic "is it worth it" value arguments, generic
intercity-travel overviews, Madrid and Barcelona general city guides,
Barcelona-airport-to-city.

**Biggest unserved gap — by far:** city- and airport-*specific* content for
the hubs that already have real route infrastructure. 9 of 11 route-hub
cities and 10 of 11 SEO-priority airports have exactly zero dedicated posts.
Every one of these already has a page to link *to* (the airport/city hub,
individual route pages) and, once written, a page to link *back from* (the
route page's related-links block — see the `RELATED_BLOG_LINKS` fix noted
in the audit).

**Second gap:** cruise-port transfers. Barcelona, Málaga, Valencia, Palma
and Ibiza airports all have `hasCruisePort: true` in the data, and none of
the 12 existing posts mention cruise travel at all — a direct parallel to
italytaxiservice's #2 gap (cruise ports beyond the obvious one or two).

**Third gap:** arrival-anxiety / practical-logistics queries (flight delays,
where exactly to meet a driver, night arrivals) — the highest-conversion,
lowest-competition query type, per the same pattern that worked on
italytaxiservice, and currently entirely unaddressed here.

**Internal-linking principle (unchanged from the proven pattern):** every
post links to ≥1 relevant route/service page, and — once
`RELATED_BLOG_LINKS` is made topic-aware per the audit's fix — the relevant
route pages link back. Two-way, not one-way.

---

## Tier 1 — City-specific transfer guides (route infrastructure already live, zero blog support)

Same shape as the existing `private-transfer-madrid-guide` /
`private-transfer-barcelona-guide` posts — do not deviate from that proven
title/angle pattern, just point it at the next 9 cities in order of route-
page count (a rough proxy for existing commercial priority):

| # | City | Route pages already live | Slug (en) | Priority |
|---|---|---|---|---|
| 1 | Valencia | 79 | `private-transfer-valencia-guide` | High |
| 2 | Palma (Mallorca) | 73 | `private-transfer-palma-guide` | High |
| 3 | Málaga | 69 | `private-transfer-malaga-guide` | High |
| 4 | Seville | 63 | `private-transfer-seville-guide` | High |
| 5 | Alicante | 61 | `private-transfer-alicante-guide` | High |
| 6 | Granada | 59 | `private-transfer-granada-guide` | Medium |
| 7 | Bilbao | 53 | `private-transfer-bilbao-guide` | Medium |
| 8 | Zaragoza | 42 | `private-transfer-zaragoza-guide` | Medium |
| 9 | Ibiza | 40 | `private-transfer-ibiza-guide` | Medium (strong seasonality — see Tier 3 note) |

**Internal links per post**: the city's own city-page, its airport page(s),
2–3 of its own highest-value route pages (e.g. the airport→city-centre
route, one or two popular day-trip routes), the relevant service page.

## Tier 2 — Airport-specific arrival guides (mirrors the one post that already works: Barcelona)

`barcelona-airport-to-city-centre-transfer-guide` is the only post of its
kind — it should be the template, not a one-off. Same angle, same structure,
for the remaining priority airports:

| # | Airport | Slug (en) | Priority |
|---|---|---|---|
| 1 | Madrid–Barajas | `madrid-airport-to-city-centre-transfer-guide` | High |
| 2 | Málaga | `malaga-airport-to-city-centre-transfer-guide` | High |
| 3 | Alicante | `alicante-airport-transfer-guide` | High |
| 4 | Valencia | `valencia-airport-transfer-guide` | Medium |
| 5 | Seville | `seville-airport-transfer-guide` | Medium |
| 6 | Bilbao | `bilbao-airport-transfer-guide` | Medium |
| 7 | Palma | `palma-airport-transfer-guide` | Medium |
| 8 | Ibiza | `ibiza-airport-transfer-guide` | Medium (seasonal peak — see Tier 3) |
| 9 | Gran Canaria | `gran-canaria-airport-transfer-guide` | Low–Medium |
| 10 | Tenerife South | `tenerife-south-airport-transfer-guide` | Low–Medium |

**Internal links per post**: the airport's own page, the Tier-1 city guide
for the same city where one exists, 2–3 of that airport's route pages, the
airport-transfers service page.

**Cannibalization check before writing each one**: confirm the airport page
itself (`lib/airports/data.ts`) doesn't already carry this exact drive-time/
"how to get to the centre" content in a way that would make the blog post
redundant rather than supportive — if it does, angle the blog post toward
comparison (transfer vs. train vs. taxi rank) instead of duplicating the
airport page's own facts.

## Tier 2b — Cruise-port transfer guides

| # | Topic | Slug (en) | Priority |
|---|---|---|---|
| 1 | Barcelona cruise port transfers (Spain's busiest cruise hub) | `barcelona-cruise-port-transfer-guide` | High |
| 2 | Málaga cruise port transfers | `malaga-cruise-port-transfer-guide` | Medium |
| 3 | Palma cruise port transfers | `palma-cruise-port-transfer-guide` | Medium |

**Internal links**: the `cruise-port-transfers` service page (already
exists — currently has no supporting blog content at all, exactly the
"service page with zero funnel content" pattern from the proven playbook),
the relevant airport and city pages.

## Tier 3 — Arrival-anxiety / logistics FAQs (highest conversion, lowest competition — write after Tier 1/2 establish the city/airport base)

| # | Topic | Angle | Priority |
|---|---|---|---|
| 1 | What happens if my flight to Spain is delayed? | Flight-monitoring/meet-and-greet reassurance, Spain-wide | High |
| 2 | Where exactly do you meet your driver at Madrid/Barcelona airport? | Concrete meeting-point logistics — mirrors italytaxiservice's highest-value FAQ sub-cluster | High |
| 3 | Arriving in Ibiza for the first time: what to know about transfers in peak season | Seasonality-specific — Ibiza's transfer market genuinely differs June–September vs. off-season | Medium |
| 4 | Night arrivals in Spain: is a private transfer available at 2am? | Off-hours reassurance | Medium |

---

## Summary count

**19 genuinely new, non-cannibalizing topics** identified from real,
evidenced gaps (9 city guides + 10 airport guides + 3 cruise guides + 4
logistics FAQs = 26 listed; 19 is the Tier 1+2+2b count excluding Tier 3,
which should only start once the city/airport base above is underway). This
is intentionally *not* padded to a round number like "50" — every topic
here maps to a real, currently-unsupported page, matching the discipline of
verifying each topic against the "do not recreate" list rather than
generating volume for its own sake.

Organize these into named cluster blocks next, in
`docs/seo-topic-clusters-plan.md`.

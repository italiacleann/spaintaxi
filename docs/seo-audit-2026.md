# Content & Technical SEO Audit — spaintaxi (2026)

> Grounded directly in the live codebase and the production Supabase database
> (queried, not assumed) on 2026-09-11. Mirrors the audit → gap-analysis →
> cluster-plan pipeline already proven on italytaxiservice.com. Nothing below
> is estimated from the brand-positioning doc (`docs/SE0-strategy-document.md`)
> alone — every count was verified against actual data files / the `blog_posts`
> table.

---

## 0. What this site already has (inventory)

| Content type | Count | Source of truth |
|---|---|---|
| Airports | 54 | `lib/airports/data.ts` (`AirportRecord[]`, `slugEn`/`slugEs` per row) |
| Cities | 36 | `lib/cities/data.ts` (`slugEn`/`slugEs` per row) |
| City-to-X route pages | **~656**, across 11 city hubs | `lib/routes/data/{city}.ts` — see breakdown below |
| Blog posts | 12, all published | Supabase `blog_posts` table (bilingual single-row schema, see §3) |
| Service pages | 12 (`airport-transfers`, `city-to-city-transfers`, `cruise-port-transfers`, `corporate-travel`/`transporte-corporativo`, `group-event-transfers`, `hourly-chauffeur`/`chauffeur-por-horas`, etc.) | `app/[locale]/*` |
| Locale routing | `[locale]` dynamic segment (not a duplicated `/es/` directory tree) — a single template renders both languages | `app/[locale]/**`, `lib/i18n/*` |

**Route pages per city hub** (from `lib/routes/data/*.ts`):
Valencia 79, Palma 73, Malaga 69, Seville 63, Alicante 61, Barcelona 60,
Madrid 57, Granada 59, Bilbao 53, Zaragoza 42, Ibiza 40.

**Cities with NO route-hub file at all** (25 of 36): Marbella, Almería,
Ávila, Burgos, Cádiz, Córdoba, Cuenca, Toledo, Segovia, Salamanca, San
Sebastián, Santander, Valladolid, León, Girona, Tarragona, Murcia, Santiago
de Compostela, Vigo, A Coruña, Pamplona, Logroño, Cáceres, Huelva, Cartagena.
These have a city landing page but no supporting route pages — out of scope
for a *content-cluster* plan (that's a route-data gap, a separate task), but
relevant context: any blog topic for these 25 cities has nothing to link
down to yet, so cluster priority should concentrate on the 11 cities that
already have real route infrastructure to support.

## 1. Internal linking — already more sophisticated than it looks

Before proposing anything new, this matters: **`lib/routes/related.ts` +
`lib/routes/related-links.ts` already implement a priority-ranked
route-to-route linking algorithm** — reverse pair → same origin → same
destination (including cross-cluster) → same airport/hub → same-cluster
filler → cross-cluster fallback, capped at 6 links per page. Every route
page also links to: home, the quote page, its parent city, its parent
airport (when applicable), every service page, the city hub, and the
airport hub. This is a real, working system — extend it, don't replace it.

**The one weak link in that otherwise-strong chain**: blog↔route linking.
`RELATED_BLOG_LINKS` in `lib/routes/related-links.ts` is a **hardcoded array
of exactly 3 blog posts, appended identically to every one of the ~656
route pages**, regardless of which city or airport the route page is
actually about. A Valencia-to-Alicante route page and a Madrid-airport
route page currently surface the *same three* blog links. This is the
single highest-leverage fix available: once more blog posts exist per city/
airport, `RELATED_BLOG_LINKS` should become a lookup keyed by city/airport
slug (falling back to the current 3 generic posts when no topic-matched
post exists yet), not a single static array.

## 2. Blog system — bilingual single-row schema (not italytaxiservice's pattern, and that's fine)

`blog_posts` holds **both languages in one row** (`slug_en`/`slug_es`,
`title_en`/`title_es`, `content_en`/`content_es`, `faq_en`/`faq_es`, etc.)
rather than italytaxiservice's two-row-plus-`translation_of` approach. This
is arguably the stronger pattern — it's structurally impossible for an EN
post to exist with no ES sibling, since they're the same row. **Keep this
pattern.** Every new post must be written with both `_en` and `_es` fields
filled in the same insert, not as a separate follow-up script.

`category`/`category_label_en`/`category_label_es` + `tags[]` already exist
as real columns — the taxonomy machinery for a proper cluster system is
already built, it's just under-populated (12 posts spread across 5
categories is not yet a cluster, it's a handful of standalone posts).

## 3. Existing blog inventory — what NOT to recreate

| Slug (en) | Category | Covers |
|---|---|---|
| `private-transfer-madrid-guide` | travel-guides | Madrid — general private-transport guide |
| `private-transfer-barcelona-guide` | travel-guides | Barcelona — general private-transport guide |
| `complete-guide-airport-transfers-spain-2026` | airport-guides | Spain-wide airport transfer overview |
| `common-mistakes-booking-airport-transfers-spain` | travel-guides | Booking-mistakes listicle, Spain-wide |
| `best-airports-in-spain-for-international-travelers` | airport-guides | Spain-wide airport comparison |
| `are-private-airport-transfers-worth-it` | airport-transfers | Value/worth-it argument, Spain-wide |
| `how-to-travel-between-spains-major-cities` | spain-travel | Intercity travel overview, Spain-wide |
| `booking-airport-transfer-spain-guide` | travel-guides | Pre-booking checklist, Spain-wide |
| `taxi-vs-uber-vs-private-transfer-spain` | taxi-tips | Mode comparison, Spain-wide |
| `airport-transfer-cost-spain` | airport-transfers | Pricing overview, Spain-wide |
| `private-transfer-vs-taxi-spain` | taxi-tips | Mode comparison, Spain-wide |
| `barcelona-airport-to-city-centre-transfer-guide` | airport-guides | Barcelona airport → city, route-specific |

**Pattern**: 11 of 12 posts are Spain-*wide* generalist content (comparisons,
cost overviews, booking advice). Only **one** post (`barcelona-airport-to-
city-centre-transfer-guide`) is genuinely route/city-specific in the way
italytaxiservice's Airport FAQ cluster is. This is the core finding driving
Stage 2 below: the generalist layer is reasonably covered; the *specific*
layer (one real post per major city/airport) has barely started.

## 4. Cannibalization watchpoints

- `taxi-vs-uber-vs-private-transfer-spain` and `private-transfer-vs-taxi-
  spain` are close enough in topic (both "private transfer vs. taxi/rideshare")
  that any *new* city-specific version of this comparison should pick a
  clearly different angle (e.g. airport-specific queue/rank realities) rather
  than a third generic vs.-post.
- `complete-guide-airport-transfers-spain-2026` and `booking-airport-
  transfer-spain-guide` overlap somewhat (general Spain-wide airport-transfer
  advice) — any new Spain-wide airport post should check both of these
  first, not just the title list.
- The service pages (`/airport-transfers`, `/city-to-city-transfers`, etc.)
  remain the canonical target for their head keywords. New blog content
  must support them with descriptive anchor text, never compete for the
  exact head term.

## 5. Where this leaves Stage 2

The white space is concentrated, specific, and easy to state: **9 of the 11
cities with real route infrastructure (Málaga, Alicante, Seville, Valencia,
Bilbao, Granada, Ibiza, Palma, Zaragoza) and 10 of the 11 SEO-priority
airports (Madrid, Málaga, Alicante, Seville, Valencia, Bilbao, Ibiza, Palma,
Gran Canaria, Tenerife South) have zero dedicated blog content**, despite
already having the route pages to receive the internal links. See
`docs/seo-content-gap-analysis.md`.

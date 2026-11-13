import type { MetadataRoute } from "next";

import {
  locales,
  localeConfig,
  defaultLocale,
  siteUrl,
  localeHome,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Dictionary } from "@/lib/i18n/types";
import { airports, getAirportPath } from "@/lib/airports/data";
import { cities, getCityPath } from "@/lib/cities/data";
import { getSitemapPosts, getBlogPostPath } from "@/lib/blog/queries";
import lastmodByPath from "@/lib/seo/lastmod.json";
import { PERMANENT_REDIRECTS } from "@/lib/seo/redirects";
import { routes, getRoutePath } from "@/lib/routes/data";

// Without this, Next.js treats the sitemap as fully static (built once,
// never refreshed), so newly-published blog posts silently stay out of it
// until the next deploy — matches the 900s window used by the blog routes
// themselves (app/[locale]/blog/[slug]/page.tsx) that this sitemap reads.
export const revalidate = 900;

const dictionaries: Record<Locale, Dictionary> = {
  en: getDictionary("en"),
  es: getDictionary("es"),
};

// Date each URL's content last changed, generated from git history by
// scripts/generate-lastmod.mjs. URLs missing from the map get no lastmod
// rather than an invented one.
const lastmod = lastmodByPath as Record<string, string>;
function lastModifiedFor(path: string): Date | undefined {
  const date = lastmod[path];
  return date ? new Date(date) : undefined;
}

function alternatesFor(pathsByLocale: Record<Locale, string>) {
  const languages: Record<string, string> = {
    "x-default": `${siteUrl}${pathsByLocale[defaultLocale]}`,
  };
  for (const locale of locales) {
    languages[localeConfig[locale].hreflang] = `${siteUrl}${pathsByLocale[locale]}`;
  }
  return languages;
}

function pairEntries(
  pathsByLocale: Record<Locale, string>,
  priority: number,
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>
): MetadataRoute.Sitemap {
  const languages = alternatesFor(pathsByLocale);
  return locales.map((locale) => ({
    url: `${siteUrl}${pathsByLocale[locale]}`,
    lastModified: lastModifiedFor(pathsByLocale[locale]),
    changeFrequency,
    priority,
    alternates: { languages },
  }));
}

type Collection = "destinations" | "services";

function collectionEntries(collection: Collection, priority = 0.6): MetadataRoute.Sitemap {
  const referenceItems = dictionaries[defaultLocale][collection];
  return referenceItems.flatMap((_, index) => {
    const pathsByLocale = locales.reduce(
      (acc, locale) => {
        acc[locale] = dictionaries[locale][collection][index].href;
        return acc;
      },
      {} as Record<Locale, string>
    );

    return pairEntries(pathsByLocale, priority, "monthly");
  });
}

function airportPageEntries(): MetadataRoute.Sitemap {
  return airports.flatMap((airport) => {
    const pathsByLocale = locales.reduce(
      (acc, locale) => {
        acc[locale] = getAirportPath(locale, airport);
        return acc;
      },
      {} as Record<Locale, string>
    );

    return pairEntries(pathsByLocale, airport.isMajor ? 0.8 : 0.6, "monthly");
  });
}

function cityPageEntries(): MetadataRoute.Sitemap {
  return cities.flatMap((city) => {
    const pathsByLocale = locales.reduce(
      (acc, locale) => {
        acc[locale] = getCityPath(locale, city);
        return acc;
      },
      {} as Record<Locale, string>
    );

    return pairEntries(pathsByLocale, city.isFeatured ? 0.8 : 0.6, "monthly");
  });
}

function routePageEntries(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => {
    const pathsByLocale = locales.reduce(
      (acc, locale) => {
        acc[locale] = getRoutePath(locale, route);
        return acc;
      },
      {} as Record<Locale, string>
    );

    return pairEntries(pathsByLocale, 0.6, "monthly");
  });
}

// Each blog row holds both languages, so a post with both slugs gets
// reciprocal hreflang alternates. lastModified is the date the content last
// changed after publication (git history, lib/blog/content-dates.ts), or the
// publication date if it hasn't been updated.
async function blogPostEntries(): Promise<MetadataRoute.Sitemap> {
  const posts = await getSitemapPosts();
  return posts.flatMap((post) => {
    const pathsByLocale: Partial<Record<Locale, string>> = {};
    if (post.slugEn) pathsByLocale.en = getBlogPostPath("en", post.slugEn);
    if (post.slugEs) pathsByLocale.es = getBlogPostPath("es", post.slugEs);
    const hasBoth = Boolean(pathsByLocale.en && pathsByLocale.es);
    const contentDate = post.updatedAt ?? post.publishedAt;
    const lastModified = contentDate ? new Date(contentDate) : undefined;
    return locales.flatMap((locale) => {
      const path = pathsByLocale[locale];
      if (!path) return [];
      return [
        {
          url: `${siteUrl}${path}`,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.6,
          ...(hasBoth ? { alternates: { languages: alternatesFor(pathsByLocale as Record<Locale, string>) } } : {}),
        },
      ];
    });
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const homeEntries: MetadataRoute.Sitemap = locales.map((locale) => {
    const pathsByLocale = locales.reduce(
      (acc, l) => {
        acc[l] = localeHome(l);
        return acc;
      },
      {} as Record<Locale, string>
    );

    return {
      url: `${siteUrl}${localeHome(locale)}`,
      lastModified: lastModifiedFor(localeHome(locale)),
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages: alternatesFor(pathsByLocale) },
    };
  });

  const aboutEntries = pairEntries(
    { en: "/about-us/", es: "/es/sobre-nosotros/" },
    0.8,
    "monthly"
  );
  const termsEntries = pairEntries(
    { en: "/terms-and-conditions/", es: "/es/terminos-y-condiciones/" },
    0.3,
    "yearly"
  );
  const privacyEntries = pairEntries(
    { en: "/privacy-policy/", es: "/es/politica-de-privacidad/" },
    0.3,
    "yearly"
  );
  const airportHubEntries = pairEntries(
    { en: "/airports/", es: "/es/aeropuertos/" },
    0.8,
    "weekly"
  );
  const cityHubEntries = pairEntries(
    { en: "/cities/", es: "/es/ciudades/" },
    0.8,
    "weekly"
  );
  const quoteEntries = pairEntries(
    { en: "/get-a-quote/", es: "/es/solicitar-presupuesto/" },
    0.9,
    "monthly"
  );
  const blogHubEntries = pairEntries({ en: "/blog/", es: "/es/blog/" }, 0.7, "weekly");

  const allEntries: MetadataRoute.Sitemap = [
    ...homeEntries,
    ...aboutEntries,
    ...termsEntries,
    ...privacyEntries,
    ...quoteEntries,
    ...airportHubEntries,
    ...airportPageEntries(),
    ...cityHubEntries,
    ...cityPageEntries(),
    ...routePageEntries(),
    ...blogHubEntries,
    ...(await blogPostEntries()),
    ...collectionEntries("destinations"),
    ...collectionEntries("services", 0.8),
  ];

  // The homepage "destinations" collection overlaps with the full city list
  // (e.g. Barcelona, Madrid appear in both) — dedupe by URL, keeping the
  // first (more specific) entry rather than emitting the same page twice.
  // Never list a URL that redirects (e.g. a merged blog post still marked
  // published in the database): the sitemap holds canonical URLs only.
  const redirected = new Set(Object.keys(PERMANENT_REDIRECTS).map((path) => `${siteUrl}${path}`));
  const seen = new Set<string>();
  return allEntries.filter((entry) => {
    if (redirected.has(entry.url) || seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

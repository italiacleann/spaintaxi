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
import { getAllSlugsForStaticParams, getBlogPostPath } from "@/lib/blog/queries";
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

async function blogPostEntries(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllSlugsForStaticParams();
  return slugs.map(({ locale, slug }) => ({
    url: `${siteUrl}${getBlogPostPath(locale, slug)}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
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
  const seen = new Set<string>();
  return allEntries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

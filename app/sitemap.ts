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
  return referenceItems.map((_, index) => {
    const pathsByLocale = locales.reduce(
      (acc, locale) => {
        acc[locale] = dictionaries[locale][collection][index].href;
        return acc;
      },
      {} as Record<Locale, string>
    );

    return {
      url: `${siteUrl}${pathsByLocale[defaultLocale]}`,
      changeFrequency: "monthly",
      priority,
      alternates: { languages: alternatesFor(pathsByLocale) },
    };
  });
}

function airportPageEntries(): MetadataRoute.Sitemap {
  return airports.map((airport) => {
    const pathsByLocale = locales.reduce(
      (acc, locale) => {
        acc[locale] = getAirportPath(locale, airport);
        return acc;
      },
      {} as Record<Locale, string>
    );

    return {
      url: `${siteUrl}${pathsByLocale[defaultLocale]}`,
      changeFrequency: "monthly",
      priority: airport.isMajor ? 0.8 : 0.6,
      alternates: { languages: alternatesFor(pathsByLocale) },
    };
  });
}

function cityPageEntries(): MetadataRoute.Sitemap {
  return cities.map((city) => {
    const pathsByLocale = locales.reduce(
      (acc, locale) => {
        acc[locale] = getCityPath(locale, city);
        return acc;
      },
      {} as Record<Locale, string>
    );

    return {
      url: `${siteUrl}${pathsByLocale[defaultLocale]}`,
      changeFrequency: "monthly",
      priority: city.isFeatured ? 0.8 : 0.6,
      alternates: { languages: alternatesFor(pathsByLocale) },
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
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

  return [
    ...homeEntries,
    ...aboutEntries,
    ...termsEntries,
    ...privacyEntries,
    ...quoteEntries,
    ...airportHubEntries,
    ...airportPageEntries(),
    ...cityHubEntries,
    ...cityPageEntries(),
    ...collectionEntries("destinations"),
    ...collectionEntries("services", 0.8),
  ];
}

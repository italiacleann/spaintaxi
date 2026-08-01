import type { Locale } from "@/lib/i18n/config";
import { absoluteUrl, localeHome } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import type { AboutDictionary } from "@/lib/i18n/about-types";
import type { LegalPageDictionary } from "@/lib/i18n/legal-types";
import type { ServicePageDictionary } from "@/lib/i18n/service-types";
import type { AirportHubDictionary } from "@/lib/airports/hub-types";
import type { AirportRecord } from "@/lib/airports/types";
import { getAirportPath } from "@/lib/airports/data";
import type { CityHubDictionary } from "@/lib/cities/hub-types";
import type { CityRecord } from "@/lib/cities/types";
import { getCityPath } from "@/lib/cities/data";
import type { QuotePageDictionary } from "@/lib/quote/types";
import { contactInfo, socialLinks } from "@/lib/data";

function buildOrganization(homeUrl: string, description: string) {
  return {
    "@type": "TravelAgency",
    "@id": `${homeUrl}#organization`,
    name: "Spain Private Transfers",
    url: homeUrl,
    logo: absoluteUrl("/opengraph-image"),
    image: absoluteUrl("/opengraph-image"),
    description,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Gran Vía 28",
      addressLocality: "Madrid",
      postalCode: "28013",
      addressCountry: "ES",
    },
    areaServed: "ES",
    priceRange: "€€",
    sameAs: socialLinks.map((social) => social.href),
  };
}

export function buildHomeJsonLd(locale: Locale, dict: Dictionary) {
  const homePath = localeHome(locale);
  const homeUrl = absoluteUrl(homePath);

  const organization = buildOrganization(homeUrl, dict.meta.description);

  const website = {
    "@type": "WebSite",
    "@id": `${homeUrl}#website`,
    url: homeUrl,
    name: "Spain Private Transfers",
    inLanguage: locale === "es" ? "es-ES" : "en",
    publisher: { "@id": `${homeUrl}#organization` },
  };

  const services = {
    "@type": "ItemList",
    itemListElement: dict.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: absoluteUrl(service.href),
        provider: { "@id": `${homeUrl}#organization` },
        areaServed: "ES",
      },
    })),
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: dict.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "es" ? "Inicio" : "Home",
        item: homeUrl,
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, services, faq, breadcrumb],
  };
}

export function buildAboutJsonLd(locale: Locale, dict: AboutDictionary, path: string) {
  const homeUrl = absoluteUrl(localeHome(locale));
  const pageUrl = absoluteUrl(path);

  const organization = buildOrganization(homeUrl, dict.meta.description);

  const aboutPage = {
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: locale === "es" ? "es-ES" : "en",
    isPartOf: { "@id": `${homeUrl}#website` },
    about: { "@id": `${homeUrl}#organization` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.breadcrumb.home,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.breadcrumb.current,
        item: pageUrl,
      },
    ],
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, aboutPage, breadcrumb, faq],
  };
}

export function buildLegalJsonLd(locale: Locale, dict: LegalPageDictionary, path: string) {
  const homeUrl = absoluteUrl(localeHome(locale));
  const pageUrl = absoluteUrl(path);

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: locale === "es" ? "es-ES" : "en",
    isPartOf: { "@id": `${homeUrl}#website` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
    dateModified: dict.hero.lastUpdatedDate,
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.breadcrumb.home,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.breadcrumb.current,
        item: pageUrl,
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webPage, breadcrumb],
  };
}

export function buildServiceJsonLd(
  locale: Locale,
  dict: ServicePageDictionary,
  path: string,
  breadcrumbHome: string
) {
  const homeUrl = absoluteUrl(localeHome(locale));
  const pageUrl = absoluteUrl(path);

  const organization = buildOrganization(homeUrl, dict.meta.description);

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: dict.hero.title,
    description: dict.meta.description,
    url: pageUrl,
    provider: { "@id": `${homeUrl}#organization` },
    areaServed: "ES",
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: locale === "es" ? "es-ES" : "en",
    isPartOf: { "@id": `${homeUrl}#website` },
    about: { "@id": `${pageUrl}#service` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: breadcrumbHome,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.breadcrumb.current,
        item: pageUrl,
      },
    ],
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, service, webPage, breadcrumb, faq],
  };
}

export function buildAirportHubJsonLd(
  locale: Locale,
  dict: AirportHubDictionary,
  path: string,
  airports: AirportRecord[]
) {
  const homeUrl = absoluteUrl(localeHome(locale));
  const pageUrl = absoluteUrl(path);

  const organization = buildOrganization(homeUrl, dict.meta.description);

  const webPage = {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: locale === "es" ? "es-ES" : "en",
    isPartOf: { "@id": `${homeUrl}#website` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.breadcrumb.home,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.breadcrumb.current,
        item: pageUrl,
      },
    ],
  };

  const itemList = {
    "@type": "ItemList",
    itemListElement: airports.map((airport, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: locale === "es" ? airport.shortNameEs : airport.shortNameEn,
        url: absoluteUrl(getAirportPath(locale, airport)),
        provider: { "@id": `${homeUrl}#organization` },
        areaServed: "ES",
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, webPage, breadcrumb, itemList],
  };
}

export function buildCityHubJsonLd(
  locale: Locale,
  dict: CityHubDictionary,
  path: string,
  cities: CityRecord[]
) {
  const homeUrl = absoluteUrl(localeHome(locale));
  const pageUrl = absoluteUrl(path);

  const organization = buildOrganization(homeUrl, dict.meta.description);

  const webPage = {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: locale === "es" ? "es-ES" : "en",
    isPartOf: { "@id": `${homeUrl}#website` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.breadcrumb.home,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.breadcrumb.current,
        item: pageUrl,
      },
    ],
  };

  const itemList = {
    "@type": "ItemList",
    itemListElement: cities.map((city, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: locale === "es" ? city.nameEs : city.nameEn,
        url: absoluteUrl(getCityPath(locale, city)),
        provider: { "@id": `${homeUrl}#organization` },
        areaServed: "ES",
      },
    })),
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, webPage, breadcrumb, itemList, faq],
  };
}

export function buildQuoteJsonLd(locale: Locale, dict: QuotePageDictionary, path: string) {
  const homeUrl = absoluteUrl(localeHome(locale));
  const pageUrl = absoluteUrl(path);

  const organization = buildOrganization(homeUrl, dict.meta.description);

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: locale === "es" ? "es-ES" : "en",
    isPartOf: { "@id": `${homeUrl}#website` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.breadcrumb.home,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.breadcrumb.current,
        item: pageUrl,
      },
    ],
  };

  const faq = {
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, webPage, breadcrumb, faq],
  };
}

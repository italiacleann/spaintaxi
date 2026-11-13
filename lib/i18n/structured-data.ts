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
import type { BlogHubDictionary } from "@/lib/blog/hub-types";
import type { LocalizedBlogPost } from "@/lib/blog/types";
import { getBlogPostPath } from "@/lib/blog/queries";
import type { RouteRecord } from "@/lib/routes/types";
import { getRouteCrumbLabel, getRouteParentCrumb } from "@/lib/routes/breadcrumbs";
import { contactInfo, socialLinks } from "@/lib/data";

/** One identifier for the business across every page and language. */
const ORGANIZATION_ID = absoluteUrl("/") + "#organization";

/** The single factual description of the business, per language. */
export const ORGANIZATION_DESCRIPTION: Record<Locale, string> = {
  en: "Spain Private Transfers helps travelers request private transfer services across Spain by connecting customers with local transport providers.",
  es: "Spain Private Transfers ayuda a los viajeros a solicitar servicios de traslado privado en toda España, poniéndolos en contacto con proveedores de transporte locales.",
};

/**
 * Organization (not LocalBusiness/TravelAgency): the business has no public
 * premises, so no address is published. The telephone is the genuine
 * WhatsApp business number with its international (+92) country code.
 * sameAs lists only verified social profiles and is omitted when there are none.
 */
function buildOrganization(locale: Locale) {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Spain Private Transfers",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/logo.png"),
    description: ORGANIZATION_DESCRIPTION[locale],
    telephone: "+" + contactInfo.whatsapp,
    email: contactInfo.email,
    areaServed: { "@type": "Country", name: "Spain" },
    ...(socialLinks.length > 0 ? { sameAs: socialLinks.map((social) => social.href) } : {}),
  };
}

export function buildHomeJsonLd(locale: Locale, dict: Dictionary) {
  const homePath = localeHome(locale);
  const homeUrl = absoluteUrl(homePath);

  const organization = buildOrganization(locale);

  const website = {
    "@type": "WebSite",
    "@id": `${homeUrl}#website`,
    url: homeUrl,
    name: "Spain Private Transfers",
    inLanguage: locale === "es" ? "es-ES" : "en",
    publisher: { "@id": ORGANIZATION_ID },
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
        provider: { "@id": ORGANIZATION_ID },
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

  const organization = buildOrganization(locale);

  const aboutPage = {
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: locale === "es" ? "es-ES" : "en",
    isPartOf: { "@id": `${homeUrl}#website` },
    about: { "@id": ORGANIZATION_ID },
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

  const organization = buildOrganization(locale);

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: dict.hero.title,
    description: dict.meta.description,
    url: pageUrl,
    provider: { "@id": ORGANIZATION_ID },
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
      ...(dict.breadcrumb.parent
        ? [{ "@type": "ListItem", position: 2, name: dict.breadcrumb.parent.label, item: absoluteUrl(dict.breadcrumb.parent.href) }]
        : []),
      {
        "@type": "ListItem",
        position: dict.breadcrumb.parent ? 3 : 2,
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

  const organization = buildOrganization(locale);

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
        provider: { "@id": ORGANIZATION_ID },
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

  const organization = buildOrganization(locale);

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
        provider: { "@id": ORGANIZATION_ID },
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

  const organization = buildOrganization(locale);

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

export function buildRouteJsonLd(locale: Locale, route: RouteRecord, path: string, breadcrumbHome: string) {
  const homeUrl = absoluteUrl(localeHome(locale));
  const pageUrl = absoluteUrl(path);
  const isEs = locale === "es";

  const title = isEs ? route.seoTitleEs : route.seoTitleEn;
  const description = isEs ? route.metaDescriptionEs : route.metaDescriptionEn;
  const originName = isEs ? route.originNameEs : route.originNameEn;
  const destinationName = isEs ? route.destinationNameEs : route.destinationNameEn;
  const faqItems = isEs ? route.faqEs : route.faqEn;
  const parentCrumb = getRouteParentCrumb(locale, route);

  const organization = buildOrganization(locale);

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `${originName} → ${destinationName}`,
    description,
    url: pageUrl,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "ES",
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    inLanguage: isEs ? "es-ES" : "en",
    isPartOf: { "@id": `${homeUrl}#website` },
    about: { "@id": `${pageUrl}#service` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: breadcrumbHome, item: homeUrl },
      ...(parentCrumb ? [{ "@type": "ListItem", position: 2, name: parentCrumb.label, item: absoluteUrl(parentCrumb.href) }] : []),
      { "@type": "ListItem", position: parentCrumb ? 3 : 2, name: getRouteCrumbLabel(locale, route), item: pageUrl },
    ],
  };

  const graph: Record<string, unknown>[] = [organization, service, webPage, breadcrumb];

  if (faqItems.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildBlogHubJsonLd(
  locale: Locale,
  dict: BlogHubDictionary,
  path: string,
  posts: LocalizedBlogPost[]
) {
  const homeUrl = absoluteUrl(localeHome(locale));
  const pageUrl = absoluteUrl(path);

  const organization = buildOrganization(locale);

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
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: post.title,
        url: absoluteUrl(getBlogPostPath(locale, post.slug)),
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, webPage, breadcrumb, itemList],
  };
}

export function buildBlogPostJsonLd(
  locale: Locale,
  post: LocalizedBlogPost,
  path: string,
  breadcrumbHome: string,
  blogHubLabel: string
) {
  const homeUrl = absoluteUrl(localeHome(locale));
  const pageUrl = absoluteUrl(path);
  const blogHubUrl = absoluteUrl(locale === "es" ? "/es/blog/" : "/blog/");

  const organization = buildOrganization(locale);

  const author = {
    "@type": "Person",
    "@id": `${homeUrl}#author-${post.authorName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    name: post.authorName,
    ...(post.authorTitle ? { jobTitle: post.authorTitle } : {}),
  };

  const article = {
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    headline: post.title,
    description: post.metaDescription,
    url: pageUrl,
    inLanguage: locale === "es" ? "es-ES" : "en",
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt ?? post.publishedAt ?? undefined,
    author: { "@id": author["@id"] },
    publisher: { "@id": ORGANIZATION_ID },
    ...(post.featuredImageUrl ? { image: post.featuredImageUrl } : {}),
    mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: post.seoTitle,
    description: post.metaDescription,
    inLanguage: locale === "es" ? "es-ES" : "en",
    isPartOf: { "@id": `${homeUrl}#website` },
    about: { "@id": `${pageUrl}#article` },
    breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: breadcrumbHome, item: homeUrl },
      { "@type": "ListItem", position: 2, name: blogHubLabel, item: blogHubUrl },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  const graph: Record<string, unknown>[] = [organization, author, article, webPage, breadcrumb];

  if (post.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

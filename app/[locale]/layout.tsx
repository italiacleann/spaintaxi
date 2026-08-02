import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "../globals.css";

import { locales, localeConfig, defaultLocale, siteUrl, isLocale, localeHome } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);
  const path = localeHome(locale);

  const languageAlternates = Object.fromEntries(
    locales.map((l) => [localeConfig[l].hreflang, localeHome(l)])
  );
  languageAlternates["x-default"] = localeHome(defaultLocale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.title,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: "Spain Private Transfers" }],
    alternates: {
      canonical: path,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale: localeConfig[locale].ogLocale,
      url: path,
      siteName: "Spain Private Transfers",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.png",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <html
      lang={localeConfig[locale].htmlLang}
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale} dict={dict} />
      </body>
    </html>
  );
}

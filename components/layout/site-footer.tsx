import Image from "next/image";
import Link from "next/link";
import { MailIcon, MapPinIcon } from "lucide-react";

import { contactInfo, socialLinks } from "@/lib/data";
import { localeHome, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/shared/container";
import {
  FacebookGlyph,
  InstagramGlyph,
  LinkedInGlyph,
  XGlyph,
} from "@/components/shared/social-icons";

const socialGlyphs = {
  facebook: FacebookGlyph,
  instagram: InstagramGlyph,
  twitter: XGlyph,
  linkedin: LinkedInGlyph,
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const serviceLinks = dict.services.map((service) => ({
    label: service.title,
    href: service.href,
  }));
  const airportLinks = dict.airports.map((airport) => ({
    label: airport.name,
    href: airport.href,
  }));
  const cityLinks = dict.destinations.map((destination) => ({
    label: destination.name,
    href: destination.href,
  }));

  return (
    <footer className="bg-[#062A3A] text-white">
      <Container className="grid grid-cols-2 gap-10 py-16 sm:grid-cols-3 lg:grid-cols-6">
        <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
          <Link href={localeHome(locale)} className="inline-flex w-fit">
            <Image
              src="/logo.png"
              alt="Spain Private Transfers"
              width={662}
              height={117}
              className="h-8 w-auto"
            />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/65">
            {dict.footer.tagline}
          </p>
          <ul className="flex flex-col gap-2 text-sm text-white/65">
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 size-4 shrink-0" />
              <span>{contactInfo.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon className="size-4 shrink-0" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                {contactInfo.email}
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2 pt-1">
            {socialLinks.map((social) => {
              const Glyph = socialGlyphs[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary"
                >
                  <Glyph className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        <FooterColumn title={dict.footer.quickLinksTitle} links={dict.footer.quickLinks} />
        <FooterColumn title={dict.footer.servicesTitle} links={serviceLinks} />
        <FooterColumn title={dict.footer.airportsTitle} links={airportLinks} />
        <FooterColumn title={dict.footer.citiesTitle} links={cityLinks} />
        <FooterColumn title={dict.footer.companyTitle} links={dict.footer.company} />
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {dict.footer.copyright}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {dict.footer.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-xs text-white/50 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}

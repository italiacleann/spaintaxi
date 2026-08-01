"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, PhoneIcon } from "lucide-react";

import { contactInfo } from "@/lib/data";
import { locales, localeHome, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      href={localeHome(locale)}
      className="flex shrink-0 items-center rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <Image
        src="/logo.png"
        alt="Spain Private Transfers"
        width={662}
        height={117}
        priority
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}

function LanguageSwitcher({
  locale,
  transparent,
  className,
}: {
  locale: Locale;
  transparent: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-1 text-sm font-medium", className)}>
      {locales.map((l, index) => (
        <span key={l} className="flex items-center gap-1">
          {index > 0 ? (
            <span className={transparent ? "text-white/30" : "text-border"}>/</span>
          ) : null}
          <Link
            href={localeHome(l)}
            aria-current={l === locale ? "page" : undefined}
            className={cn(
              "rounded px-1 uppercase transition-colors",
              l === locale
                ? "text-cta"
                : transparent
                  ? "text-white/80 hover:text-white"
                  : "text-muted-foreground hover:text-primary"
            )}
          >
            {l}
          </Link>
        </span>
      ))}
    </div>
  );
}

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const transparent = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300",
        transparent
          ? "border-transparent bg-transparent"
          : "border-border bg-background/95 shadow-sm backdrop-blur-md"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-18">
        <Logo locale={locale} />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {dict.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                transparent
                  ? "text-white/90 hover:bg-white/10 hover:text-white"
                  : "text-muted-foreground hover:bg-accent hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} transparent={transparent} className="hidden md:flex" />
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
            className={cn(
              "hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors xl:inline-flex",
              transparent
                ? "text-white/90 hover:text-white"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <PhoneIcon className="size-4" />
            {contactInfo.phone}
          </a>
          <a
            href="#quote"
            className={cn(
              buttonVariants({ size: "lg" }),
              "hidden bg-cta text-cta-foreground hover:bg-cta/90 sm:inline-flex"
            )}
          >
            {dict.header.getQuote}
          </a>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "lg:hidden",
                    transparent && "text-white hover:bg-white/10 hover:text-white"
                  )}
                  aria-label={dict.header.openMenu}
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle>{dict.header.menuTitle}</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                {dict.nav.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className="rounded-md px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-primary"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t border-border p-4">
                <LanguageSwitcher locale={locale} transparent={false} />
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
                >
                  <PhoneIcon className="size-4" />
                  {contactInfo.phone}
                </a>
                <SheetClose
                  render={
                    <a
                      href="#quote"
                      className={cn(
                        buttonVariants(),
                        "w-full bg-cta text-cta-foreground hover:bg-cta/90"
                      )}
                    />
                  }
                >
                  {dict.header.getQuote}
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}

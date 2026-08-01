import Link from "next/link";

import type { LegalPageDictionary } from "@/lib/i18n/legal-types";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";

export function LegalCta({ dict }: { dict: LegalPageDictionary }) {
  const t = dict.cta;

  return (
    <section aria-label={t.title} className="bg-primary py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-5 text-center">
        <h2 className="max-w-xl text-2xl font-semibold text-white sm:text-3xl">{t.title}</h2>
        <p className="max-w-lg text-base leading-relaxed text-white/80">{t.description}</p>
        <Link
          href={t.href}
          className={buttonVariants({ size: "lg", className: "h-12 bg-cta px-8 text-base text-cta-foreground hover:bg-cta/90" })}
        >
          {t.button}
        </Link>
      </Container>
    </section>
  );
}

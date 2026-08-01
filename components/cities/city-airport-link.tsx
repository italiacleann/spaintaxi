import Link from "next/link";
import { PlaneIcon, ArrowRightIcon } from "lucide-react";

import type { CityPageDictionary } from "@/lib/cities/city-page-types";
import { Container } from "@/components/shared/container";

export function CityAirportLink({ dict }: { dict: CityPageDictionary }) {
  const t = dict.airportLink;

  return (
    <section aria-label="Airport transfer link" className="py-4">
      <Container>
        <div className="flex flex-col items-start gap-4 rounded-2xl bg-primary/5 p-6 ring-1 ring-primary/10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <PlaneIcon className="size-5" />
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-heading text-base font-semibold text-foreground">{t.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.description}</p>
            </div>
          </div>
          <Link
            href={t.href}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t.linkLabel}
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

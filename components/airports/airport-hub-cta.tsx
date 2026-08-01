import { PhoneIcon } from "lucide-react";

import { contactInfo } from "@/lib/data";
import type { AirportHubDictionary } from "@/lib/airports/hub-types";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AirportHubCta({ dict }: { dict: AirportHubDictionary }) {
  const t = dict.cta;

  return (
    <section aria-labelledby="airport-hub-cta-heading" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--secondary)_0%,_transparent_50%)] opacity-25" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2
          id="airport-hub-cta-heading"
          className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl"
        >
          {t.title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {t.description}
        </p>
        <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 bg-cta px-8 text-base text-cta-foreground hover:bg-cta/90"
            )}
          >
            {t.button}
          </a>
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 text-base font-medium text-white hover:underline"
          >
            <PhoneIcon className="size-5" />
            {contactInfo.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}

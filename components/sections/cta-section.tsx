import Image from "next/image";

import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaSection({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1920&h=900&fit=crop&q=80"
          alt="Open road through the Spanish countryside"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 id="cta-heading" className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
          {dict.ctaSection.title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          {dict.ctaSection.description}
        </p>
        <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
          <a
            href="#quote"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 bg-cta px-8 text-base text-cta-foreground hover:bg-cta/90"
            )}
          >
            {dict.ctaSection.cta}
          </a>
        </div>
      </Container>
    </section>
  );
}

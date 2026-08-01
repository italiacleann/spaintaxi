import type { QuotePageDictionary } from "@/lib/quote/types";
import { Container } from "@/components/shared/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function QuoteCta({ dict }: { dict: QuotePageDictionary["cta"] }) {
  return (
    <section aria-labelledby="quote-cta-heading" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--secondary)_0%,_transparent_50%)] opacity-25" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 id="quote-cta-heading" className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
          {dict.title}
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{dict.description}</p>
        <a
          href="#quote-form"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-12 bg-cta px-8 text-base text-cta-foreground hover:bg-cta/90"
          )}
        >
          {dict.button}
        </a>
      </Container>
    </section>
  );
}

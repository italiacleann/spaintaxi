import type { AboutDictionary } from "@/lib/i18n/about-types";
import { aboutStepIcons } from "@/components/shared/icon-maps";
import { Container } from "@/components/shared/container";

export function AboutProcess({ dict }: { dict: AboutDictionary }) {
  const t = dict.process;

  return (
    <section aria-labelledby="how-it-works-heading" className="bg-muted/40 py-20 sm:py-28">
      <Container className="flex flex-col gap-14">
        <h3
          id="how-it-works-heading"
          className="text-center text-2xl leading-tight font-semibold text-balance sm:text-3xl"
        >
          {t.title}
        </h3>
        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute top-8 right-0 left-0 hidden h-px bg-border lg:block"
          />
          {t.steps.map((step) => {
            const Icon = aboutStepIcons[step.icon];
            return (
              <div key={step.step} className="relative flex flex-col items-start gap-4">
                <span className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-white text-primary shadow-lg ring-1 ring-black/5">
                  <Icon className="size-7" />
                  <span className="absolute -top-2.5 -right-2.5 flex size-7 items-center justify-center rounded-full bg-cta text-xs font-bold text-cta-foreground">
                    {step.step}
                  </span>
                </span>
                <h4 className="font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

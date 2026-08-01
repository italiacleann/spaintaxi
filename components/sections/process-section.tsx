import type { Dictionary } from "@/lib/i18n/types";
import { stepIcons } from "@/components/shared/icon-maps";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function ProcessSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="how-it-works"
      aria-labelledby="process-heading"
      className="scroll-mt-20 bg-primary py-20 sm:py-28"
    >
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow={dict.processSection.eyebrow}
          title={dict.processSection.title}
          className="[&_h2]:text-white [&_p]:text-white/75 [&_span]:bg-white/10 [&_span]:text-white"
        />
        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute top-8 right-0 left-0 hidden h-px bg-white/15 lg:block"
          />
          {dict.bookingSteps.map((step) => {
            const Icon = stepIcons[step.icon];
            return (
              <div key={step.step} className="relative flex flex-col items-start gap-4">
                <span className="relative z-10 flex size-16 items-center justify-center rounded-2xl bg-white text-primary shadow-lg">
                  <Icon className="size-7" />
                  <span className="absolute -top-2.5 -right-2.5 flex size-7 items-center justify-center rounded-full bg-cta text-xs font-bold text-cta-foreground">
                    {step.step}
                  </span>
                </span>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/75">
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

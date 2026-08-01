import type { ServiceSharedContent } from "@/lib/i18n/service-shared-content";
import { servicePageStepIcons } from "@/components/shared/icon-maps";
import { Container } from "@/components/shared/container";

export function ServiceProcess({ shared }: { shared: ServiceSharedContent }) {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="scroll-mt-20 bg-primary py-20 sm:py-28"
    >
      <Container className="flex flex-col gap-14">
        <h2
          id="how-it-works-heading"
          className="text-center text-3xl leading-tight font-semibold text-balance text-white sm:text-4xl"
        >
          {shared.processTitle}
        </h2>
        <div className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute top-8 right-0 left-0 hidden h-px bg-white/15 lg:block"
          />
          {shared.processSteps.map((step) => {
            const Icon = servicePageStepIcons[step.icon];
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

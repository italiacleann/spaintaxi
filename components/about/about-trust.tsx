import type { AboutDictionary } from "@/lib/i18n/about-types";
import { aboutTrustIcons } from "@/components/shared/icon-maps";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function AboutTrust({ dict }: { dict: AboutDictionary }) {
  const t = dict.trust;

  return (
    <section aria-labelledby="commitment-quality-heading" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title={t.title}
          description={t.description}
          headingId="commitment-quality-heading"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {t.items.map((item) => {
            const Icon = aboutTrustIcons[item.icon];
            return (
              <div
                key={item.title}
                className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 text-center shadow-sm ring-1 ring-black/5"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <Icon className="size-6" />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

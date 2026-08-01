import type { AboutDictionary } from "@/lib/i18n/about-types";
import { aboutWhyIcons } from "@/components/shared/icon-maps";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function AboutWhyChoose({ dict }: { dict: AboutDictionary }) {
  const t = dict.whyChoose;

  return (
    <section aria-labelledby="why-choose-us-heading" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          title={t.title}
          description={t.description}
          headingId="why-choose-us-heading"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item) => {
            const Icon = aboutWhyIcons[item.icon];
            return (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
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

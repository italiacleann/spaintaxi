import type { AboutDictionary } from "@/lib/i18n/about-types";
import { Container } from "@/components/shared/container";

export function AboutStats({ dict }: { dict: AboutDictionary }) {
  return (
    <section aria-label={dict.hero.badge} className="bg-muted/40 py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {dict.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1.5 rounded-2xl bg-card px-4 py-6 text-center shadow-sm ring-1 ring-black/5"
            >
              <span className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

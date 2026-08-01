import type { Dictionary } from "@/lib/i18n/types";
import { trustIcons } from "@/components/shared/icon-maps";
import { Container } from "@/components/shared/container";

export function TrustBar({ dict }: { dict: Dictionary }) {
  return (
    <section aria-label="Why travelers trust us" className="relative z-10 -mt-10 sm:-mt-14">
      <Container>
        <div className="grid grid-cols-1 gap-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
          {dict.trustBar.map((item) => {
            const Icon = trustIcons[item.icon];
            return (
              <div key={item.title} className="flex items-start gap-3.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-snug text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import type { ServiceBenefitItem } from "@/lib/i18n/service-types";
import { servicePageIcons } from "@/components/shared/icon-maps";
import { Container } from "@/components/shared/container";

export function ServiceBenefits({ items }: { items: ServiceBenefitItem[] }) {
  return (
    <section aria-label="Service benefits" className="relative z-10 -mt-10 sm:-mt-14">
      <Container>
        <div className="grid grid-cols-2 gap-6 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 sm:grid-cols-4 sm:p-8">
          {items.map((item) => {
            const Icon = servicePageIcons[item.icon];
            return (
              <div key={item.title} className="flex flex-col items-start gap-2.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-snug text-muted-foreground">
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

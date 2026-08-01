import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function RelatedServicesSection({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <section aria-labelledby="related-services-heading" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading title={title} headingId="related-services-heading" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between gap-3 rounded-2xl bg-card p-5 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-heading text-sm font-semibold text-foreground">
                {item.label}
              </span>
              <ArrowRightIcon className="size-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

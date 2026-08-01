import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

export function DestinationsSection({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="destinations-heading" className="bg-muted/40 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={dict.destinationsSection.eyebrow}
          title={dict.destinationsSection.title}
          description={dict.destinationsSection.description}
        />
        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-3">
          {dict.destinations.map((destination, index) => (
            <article
              key={destination.href}
              className={`group relative flex overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                index === 0 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <Link href={destination.href} className="contents">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.imageAlt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-5">
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-white/80">{destination.description}</p>
                    <span className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-white">
                      {dict.destinationsSection.viewTransfers}
                      <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

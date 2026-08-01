import { QuoteIcon, StarIcon } from "lucide-react";

import type { Dictionary } from "@/lib/i18n/types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TestimonialsSection({ dict }: { dict: Dictionary }) {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-muted/40 py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow={dict.testimonialsSection.eyebrow}
          title={dict.testimonialsSection.title}
          description={dict.testimonialsSection.description}
        />
        <Carousel opts={{ align: "start", loop: true }} className="px-2 sm:px-10">
          <CarouselContent>
            {dict.testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="sm:basis-1/2 lg:basis-1/3"
              >
                <figure className="flex h-full flex-col gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-black/5">
                  <QuoteIcon className="size-7 text-secondary" />
                  <div className="flex items-center gap-0.5 text-cta">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <StarIcon key={index} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-border pt-4">
                    <Avatar size="lg">
                      <AvatarImage src={testimonial.avatar} alt="" />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-none bg-white shadow-md" />
          <CarouselNext className="border-none bg-white shadow-md" />
        </Carousel>
      </Container>
    </section>
  );
}

import { StarIcon } from "lucide-react";

import type { TestimonialItem } from "@/lib/i18n/types";
import { Container } from "@/components/shared/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ServiceTestimonials({ testimonials }: { testimonials: TestimonialItem[] }) {
  return (
    <section aria-label="Customer reviews" className="py-20 sm:py-28">
      <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.slice(0, 3).map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-black/5"
          >
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
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </Container>
    </section>
  );
}

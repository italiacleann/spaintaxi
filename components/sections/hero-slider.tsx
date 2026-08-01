"use client";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carSlides = [
  {
    src: "/slider-car.png",
    alt: "Premium taxi vehicle available for private transfer in Spain",
  },
];

export function HeroSlider() {
  const hasMultipleSlides = carSlides.length > 1;

  return (
    <div className="relative mx-auto w-full max-w-xl animate-in fade-in slide-in-from-right-16 duration-1000">
      <div className="absolute inset-x-8 bottom-4 h-8 rounded-full bg-black/30 blur-xl" aria-hidden />
      <Carousel opts={{ loop: hasMultipleSlides }} className="w-full">
        <CarouselContent>
          {carSlides.map((slide) => (
            <CarouselItem key={slide.src}>
              <div className="animate-float">
                <div className="relative aspect-[7/4] w-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {hasMultipleSlides ? (
          <>
            <CarouselPrevious className="border-none bg-white/90 shadow-md" />
            <CarouselNext className="border-none bg-white/90 shadow-md" />
          </>
        ) : null}
      </Carousel>
    </div>
  );
}

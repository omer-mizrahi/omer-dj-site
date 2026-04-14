"use client";

import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { whatsappReviews, type GalleryMediaItem } from "@/lib/site-config";

export function ReviewGallery() {
  const [active, setActive] = React.useState<GalleryMediaItem | null>(null);

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    if (!active) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-turquoise">
            הודעות שעושות את היום
          </p>
        </div>

        <Carousel
          opts={{ direction: "rtl", align: "start" }}
          dir="rtl"
          className="mx-auto mt-10 w-full max-w-5xl px-10"
        >
          <CarouselContent aria-label="גלריית הודעות וואטסאפ">
            {whatsappReviews.map((r) => (
              <CarouselItem key={r.id} className="basis-[80%] md:basis-1/3 lg:basis-1/4">
                <button
                  type="button"
                  className="group w-full cursor-grab transition-opacity hover:opacity-95 active:cursor-grabbing"
                  onClick={() => setActive(r)}
                  aria-label={r.alt}
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-gray-800 bg-black/30">
                    <Image
                      src={r.src}
                      alt={r.alt}
                      fill
                      sizes="(max-width: 768px) 80vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="border-white/15 bg-background/40 text-foreground backdrop-blur-sm hover:bg-white/5 hover:text-foreground" />
          <CarouselNext className="border-white/15 bg-background/40 text-foreground backdrop-blur-sm hover:bg-white/5 hover:text-foreground" />
        </Carousel>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActive(null);
          }}
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -top-12 end-0">
              <Button
                variant="outline"
                className="h-10 rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                onClick={() => setActive(null)}
              >
                סגור
              </Button>
            </div>
            <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-black ring-1 ring-white/10">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}


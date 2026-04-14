"use client";

import * as React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { eventMedia, type GalleryMediaItem } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const cardClassName =
  "relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 ring-1 ring-white/5";

export function Gallery() {
  const [visibleCount, setVisibleCount] = React.useState(8);
  const [active, setActive] = React.useState<GalleryMediaItem | null>(null);

  const visibleItems = eventMedia.slice(0, visibleCount);
  const canToggle = eventMedia.length > 8;

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    if (!active) return;
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            <span
              className="bg-gradient-to-l from-blue-700 to-blue-500 bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text" }}
            >
              רגעים מהרחבה
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          גלריית אירועים וחתונות
          </p>
        </div>

        <div
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {visibleItems.map((media) => (
            <div
              key={media.id}
              className={cn(cardClassName, "cursor-pointer")}
              role="button"
              tabIndex={0}
              aria-label={media.alt}
              onClick={() => setActive(media)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActive(media);
              }}
            >
              <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-xl bg-muted/20 cursor-pointer">
                {media.type === "image" ? (
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    unoptimized={true}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={media.src}
                    muted
                    playsInline
                    preload="metadata"
                  />
                )}
                {media.type === "video" ? (
                  <div className="pointer-events-none absolute inset-0 grid place-items-center">
                    <div className="rounded-full bg-black/55 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">
                      וידאו
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {canToggle ? (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              className="h-11 rounded-full border-white/15 bg-background/40 px-8 backdrop-blur-sm"
              onClick={() => {
                if (visibleCount < eventMedia.length) {
                  setVisibleCount((prev) => prev + 8);
                } else {
                  setVisibleCount(8);
                }
              }}
            >
              {visibleCount < eventMedia.length ? "הצג עוד" : "הצג פחות"}
            </Button>
          </div>
        ) : null}
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
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              className="absolute -top-12 end-0 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
              onClick={() => setActive(null)}
            >
              סגור
            </button>
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black ring-1 ring-white/10">
              {active.type === "image" ? (
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              ) : (
                <video
                  className="absolute inset-0 size-full bg-black object-contain"
                  src={active.src}
                  controls
                  autoPlay
                  playsInline
                />
              )}
            </div>
            <p className="mt-3 text-center text-sm text-white/80">{active.alt}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

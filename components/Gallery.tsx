"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { eventMedia, type GalleryMediaItem } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardClassName =
  "relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 ring-1 ring-white/5";

function MediaPreview({ media, className }: { media: GalleryMediaItem; className?: string }) {
  if (media.type === "image") {
    return (
      <div className={cn("group relative size-full", className)}>
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    );
  }

  return (
    <video
      className={cn(
        "absolute inset-0 size-full cursor-pointer bg-black object-cover",
        className
      )}
      src={media.src}
      muted
      playsInline
      preload="metadata"
    />
  );
}

export function Gallery() {
  const INITIAL_VISIBLE = 6;
  const [visibleCount, setVisibleCount] = React.useState(INITIAL_VISIBLE);
  const [active, setActive] = React.useState<GalleryMediaItem | null>(null);

  const visibleItems = eventMedia.slice(0, visibleCount);
  const canToggle = eventMedia.length > INITIAL_VISIBLE;
  const isExpanded = visibleCount >= eventMedia.length;

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
              className="bg-gradient-to-l from-neon-purple to-electric-blue bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text" }}
            >
              רגעים מהרחבה
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          גלריית אירועים וחתונות
          </p>
        </div>

        <motion.div
          className={cn(
            "mt-14 columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3",
            "[&>*]:break-inside-avoid"
          )}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {visibleItems.map((media) => (
            <motion.div
              key={media.id}
              variants={item}
              className={cn(cardClassName, "cursor-pointer")}
              role="button"
              tabIndex={0}
              aria-label={media.alt}
              onClick={() => setActive(media)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActive(media);
              }}
            >
              <div className="relative aspect-square">
                <MediaPreview media={media} />
                {media.type === "video" ? (
                  <div className="pointer-events-none absolute inset-0 grid place-items-center">
                    <div className="rounded-full bg-black/55 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15">
                      וידאו
                    </div>
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {canToggle ? (
          <div className="mt-10 flex justify-center">
            <Button
              variant="outline"
              className="h-11 rounded-full border-white/15 bg-background/40 px-8 backdrop-blur-sm"
              onClick={() => {
                if (isExpanded) {
                  setVisibleCount(INITIAL_VISIBLE);
                } else {
                  setVisibleCount(eventMedia.length);
                }
              }}
            >
              {isExpanded ? "הצג פחות" : "הצג עוד"}
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

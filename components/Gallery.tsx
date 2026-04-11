"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "youtube"; videoId: string; alt: string };

const mediaItems: MediaItem[] = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1000&auto=format&fit=crop",
    alt: "DJ playing at a wedding",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1000&auto=format&fit=crop",
    alt: "Crowd dancing at a party",
  },
  {
    type: "youtube",
    videoId: "jfKfPfyJRdk",
    alt: "Live DJ Set",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1533174000265-e9b0962b1bea?q=80&w=1000&auto=format&fit=crop",
    alt: "Party lights",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
    alt: "DJ controller close up",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop",
    alt: "Happy crowd",
  },
];

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
  "relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/40 ring-1 ring-white/5";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 bg-[#09090b] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            <span
              className="bg-gradient-to-l from-neon-purple via-fuchsia-400 to-electric-blue bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text" }}
            >
              רגעים מהרחבה
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            האנרגיה, הסאונד והחוויה של אירוע פרימיום.
          </p>
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {mediaItems.map((media) => (
            <motion.div
              key={
                media.type === "image" ? media.src : `yt-${media.videoId}`
              }
              variants={item}
              className={cardClassName}
            >
              {media.type === "image" ? (
                <div className="group relative size-full">
                  <Image
                    src={media.src}
                    alt={media.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ) : (
                <iframe
                  title={media.alt}
                  src={`https://www.youtube.com/embed/${media.videoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className={cn(
                    "absolute inset-0 size-full border-0",
                    "bg-black"
                  )}
                  loading="lazy"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

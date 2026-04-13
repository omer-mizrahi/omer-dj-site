"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Play } from "lucide-react";

import { cn } from "@/lib/utils";

const WAVE_BARS = 5;

function EnergyWave() {
  return (
    <div
      className="flex h-4 items-end justify-center gap-0.5"
      aria-hidden
    >
      {Array.from({ length: WAVE_BARS }).map((_, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-neon-purple/95"
          style={{ height: 14, transformOrigin: "bottom" }}
          animate={{
            scaleY: [0.35, 1, 0.5, 0.85, 0.35],
          }}
          transition={{
            duration: 0.85 + i * 0.07,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2000&auto=format&fit=crop"
        alt="DJ crowd background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 z-10 bg-black/60 bg-gradient-to-t from-[#050505] via-transparent to-transparent"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className="relative z-20 mt-16 flex w-full max-w-4xl flex-col items-center px-6 text-center"
      >
        {/* Live Energy badge */}
        <div
          className={cn(
            "mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10",
            "bg-white/[0.06] px-3 py-1.5 shadow-[0_0_24px_rgba(37,99,235,0.14)] backdrop-blur-md",
            "ring-1 ring-white/5"
          )}
        >
          <motion.span className="relative flex size-2.5 shrink-0" aria-hidden>
            <motion.span
              className="absolute inset-0 rounded-full bg-neon-purple opacity-60"
              animate={{ scale: [1, 1.65, 1], opacity: [0.45, 0, 0.45] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="relative size-2.5 rounded-full bg-neon-purple shadow-[0_0_12px_rgba(37,99,235,0.75)]"
              animate={{ scale: [1, 1.08, 1], opacity: [1, 0.85, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.span>
          <EnergyWave />
          <span className="text-xs font-medium tabular-nums tracking-wide text-white/90">
            Live Energy: 100%
          </span>
        </div>

        <h1
          dir="ltr"
          className={cn(
            "text-balance font-black uppercase tracking-[0.18em] text-white",
            "text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl",
            "drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]"
          )}
        >
          OMER MIZRAHI
        </h1>

        <h2 className="mt-6 text-balance text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block sm:inline">לא עוד אירוע. </span>
          <span className="relative inline-block">
            <span
              className="bg-gradient-to-l from-neon-purple to-electric-blue bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text" }}
            >
              חוויה
            </span>
          </span>
          <span className="block sm:inline"> של פעם בחיים.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
          מסע מוזיקלי שמתחיל ברגש ומתפוצץ ברחבה. התאמה אישית מלאה, חוויית שירות
          פרימיום, וחתימת סאונד ייחודית המשלבת נגיעות של Afro, Arabic & Melodic
          House.
        </p>

        <div className="mt-10 flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <motion.a
            href="#lead-form"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className={cn(
              "inline-flex h-14 w-full items-center justify-center gap-2 rounded-full px-8 text-base font-semibold text-white shadow-lg",
              "bg-blue-glow",
              "shadow-[0_0_32px_rgba(37,99,235,0.28),0_10px_40px_rgba(11,31,74,0.35)]",
              "ring-1 ring-white/15 transition-[filter] hover:brightness-110",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              "sm:min-w-[280px]"
            )}
          >
            <ArrowDown className="size-5 shrink-0 opacity-90" aria-hidden />
            בדקו זמינות לתאריך שלכם
          </motion.a>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/#gallery"
              className={cn(
                "inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/15 px-8 text-base font-semibold text-white",
                "bg-white/[0.06] backdrop-blur-md",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
                "transition-colors hover:border-white/25 hover:bg-white/[0.1]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "sm:min-w-[200px]"
              )}
            >
              <Play className="size-5 shrink-0 opacity-90" aria-hidden />
              צפו בקליפים
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

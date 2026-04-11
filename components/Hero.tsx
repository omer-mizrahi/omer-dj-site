"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.06,
    },
  },
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

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
          className="w-[3px] rounded-full bg-emerald-400/95"
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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8"
    >
      {/* Base + cinematic gradients */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#09090b]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-25%,rgba(192,38,252,0.22),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_95%,rgba(47,107,255,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_15%_80%,rgba(192,38,252,0.08),transparent_50%)]"
        aria-hidden
      />

      {/* Media placeholder — swap for <video /> or next/image */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-zinc-900/25 via-zinc-950/40 to-[#09090b]/90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-black/45"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/75 to-[#09090b]/20"
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* Live Energy badge */}
        <motion.div variants={rise}>
          <div
            className={cn(
              "mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10",
              "bg-white/[0.06] px-3 py-1.5 shadow-[0_0_24px_rgba(192,38,252,0.08)] backdrop-blur-md",
              "ring-1 ring-white/5"
            )}
          >
            <motion.span
              className="relative flex size-2.5 shrink-0"
              aria-hidden
            >
              <motion.span
                className="absolute inset-0 rounded-full bg-emerald-400 opacity-60"
                animate={{ scale: [1, 1.65, 1], opacity: [0.45, 0, 0.45] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="relative size-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                animate={{ scale: [1, 1.08, 1], opacity: [1, 0.85, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.span>
            <EnergyWave />
            <span className="text-xs font-medium tabular-nums tracking-wide text-white/90">
              Live Energy: 100%
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={rise}
          className="text-balance text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="block sm:inline">לא עוד אירוע. </span>
          <span className="relative inline-block">
            <span
              className="bg-gradient-to-l from-neon-purple via-fuchsia-400 to-electric-blue bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text" }}
            >
              חוויה
            </span>
          </span>
          <span className="block sm:inline"> של פעם בחיים.</span>
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
        >
          מסע מוזיקלי שמתחיל ברגש ומתפוצץ ברחבה. התאמה אישית מלאה, חוויית שירות
          פרימיום, וחתימת סאונד ייחודית המשלבת נגיעות של Afro, Arabic & Melodic
          House.
        </motion.p>

        <motion.div
          variants={rise}
          className="mt-10 flex w-full max-w-xl flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/#contact"
              className={cn(
                "inline-flex h-14 w-full items-center justify-center rounded-full px-8 text-base font-semibold text-white shadow-lg",
                "bg-gradient-to-l from-neon-purple to-electric-blue",
                "shadow-[0_0_32px_rgba(192,38,252,0.35),0_8px_32px_rgba(47,107,255,0.2)]",
                "ring-1 ring-white/15 transition-[filter] hover:brightness-110",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
                "sm:min-w-[280px]"
              )}
            >
              בדקו זמינות לתאריך שלכם
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/#gallery"
              className={cn(
                "inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border border-white/15 px-8 text-base font-semibold text-foreground",
                "bg-white/[0.06] backdrop-blur-md",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
                "transition-colors hover:border-white/25 hover:bg-white/[0.1]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]",
                "sm:min-w-[200px]"
              )}
            >
              <Play className="size-5 shrink-0 opacity-90" aria-hidden />
              צפו בקליפים
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

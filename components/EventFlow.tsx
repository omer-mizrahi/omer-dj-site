"use client";

import type { LucideIcon } from "lucide-react";
import {
  CircleHelp,
  Crown,
  Flame,
  Heart,
  Music,
  PartyPopper,
  Settings,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

import type { ServiceFlowStep } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, LucideIcon> = {
  Music,
  Heart,
  Star,
  Flame,
  Sparkles,
  Crown,
  PartyPopper,
  Settings,
  Zap,
};

function resolveFlowIcon(iconName: string): LucideIcon {
  return ICON_MAP[iconName] ?? CircleHelp;
}

export interface EventFlowProps {
  steps?: readonly ServiceFlowStep[] | ServiceFlowStep[] | null | undefined;
  /** מזהה ייחודי ל־key כשמציגים כמה מופעים */
  instanceKey?: string;
}

const motionProps = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, margin: "-100px" as const },
};

function TimelineNode() {
  return (
    <div
      className="relative z-10 flex shrink-0 justify-center md:w-auto md:pt-2"
      aria-hidden
    >
      <span className="relative flex size-4 items-center justify-center rounded-full bg-[#09090b] ring-2 ring-neon-purple/80 ring-offset-2 ring-offset-[#09090b]">
        <span className="absolute inset-0 rounded-full bg-neon-purple/40 blur-md" />
        <span className="relative size-2 rounded-full bg-gradient-to-br from-neon-purple to-electric-blue shadow-[0_0_12px_rgba(192,38,252,0.9)]" />
      </span>
    </div>
  );
}

function StepCard({
  step,
  className,
}: {
  step: ServiceFlowStep;
  className?: string;
}) {
  const Icon = resolveFlowIcon(step.icon);
  return (
    <article
      className={cn(
        "w-full max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(192,38,252,0.06)] backdrop-blur-md",
        "ring-1 ring-inset ring-white/5 transition hover:border-white/15 hover:ring-white/10",
        "text-start",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple/30 to-electric-blue/25 text-neon-purple ring-1 ring-white/10"
          aria-hidden
        >
          <Icon className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold text-foreground sm:text-2xl">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {step.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function EventFlow({ steps, instanceKey = "default" }: EventFlowProps) {
  const list = steps?.length ? [...steps] : [];

  if (list.length === 0) {
    return null;
  }

  return (
    <section
      id="event-flow"
      className="scroll-mt-24 border-y border-white/5 bg-[#09090b] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-balance text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          <span className="block sm:inline">המסע שלנו: איך נראה אירוע של </span>
          <span
            className="bg-gradient-to-l from-neon-purple via-fuchsia-400 to-electric-blue bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: "text" }}
          >
            פעם בחיים
          </span>
        </h2>

        <div className="relative mt-16 md:mt-24">
          <div
            className="pointer-events-none absolute inset-y-0 start-5 w-px md:start-1/2 md:-translate-x-1/2"
            aria-hidden
          >
            <div className="h-full w-full bg-gradient-to-b from-neon-purple/50 via-white/15 to-electric-blue/40" />
          </div>

          <ol className="relative m-0 list-none space-y-0 p-0">
            {list.map((step, index) => {
              const isEven = index % 2 === 0;
              const key = `${instanceKey}-${step.title}-${index}`;

              return (
                <li key={key} className="relative pb-14 last:pb-0 md:pb-20">
                  <div className="flex flex-col gap-4 ps-12 md:hidden">
                    <div className="absolute start-5 top-7 z-10 -translate-x-1/2 rtl:translate-x-1/2">
                      <TimelineNode />
                    </div>
                    <motion.div {...motionProps}>
                      <StepCard step={step} />
                    </motion.div>
                  </div>

                  <div className="hidden md:grid md:min-h-0 md:grid-cols-[1fr_auto_1fr] md:gap-8 md:ps-0">
                    {isEven ? (
                      <>
                        <motion.div
                          className="flex justify-end"
                          {...motionProps}
                        >
                          <StepCard step={step} />
                        </motion.div>
                        <TimelineNode />
                        <div aria-hidden />
                      </>
                    ) : (
                      <>
                        <div aria-hidden />
                        <TimelineNode />
                        <motion.div
                          className="flex justify-start"
                          {...motionProps}
                        >
                          <StepCard step={step} />
                        </motion.div>
                      </>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

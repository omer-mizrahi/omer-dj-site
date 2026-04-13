"use client";

import type { LucideIcon } from "lucide-react";
import { Coffee, Flame, Star, Headphones, ListMusic } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type JourneyStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const JOURNEY_STEPS: readonly JourneyStep[] = [
  {
    title: "הקליק הראשון (פגישת אפיון)",
    description:
      "מפגש היכרות שבו אנחנו שותים קפה, מדברים על החזון שלכם, מבינים את הווייב שאתם מחפשים ומתחילים לבנות את השפה המוזיקלית של האירוע.",
    icon: Coffee,
  },
  {
    title: "תעודת זהות מוזיקלית",
    description:
      "יורדים לפרטים הקטנים. מהם שירי החובה שלכם? מה בשום אופן לא לנגן? אנחנו מדייקים את הפלייליסט כך שיתאים בול לקהל ולטעם האישי שלכם.",
    icon: ListMusic,
  },
  {
    title: "עבודת אולפן (היתרון שלי)",
    description:
      "כמפיק מוזיקלי, כאן מתחיל הקסם האמיתי. אני נכנס לאולפן כדי להכין עריכות מיוחדות, וגרסאות ייחודיות עבור האירוע שלכם.",
    icon: Headphones,
  },
  {
    title: "האירוע (Live Energy)",
    description:
      "היום הגדול הגיע. אפס תקלות, 100% אנרגיה. קריאת קהל חדה בזמן אמת ושליטה אבסולוטית ברחבה.",
    icon: Flame,
  },
  {
    title: "הזיכרון שנשאר",
    description:
      "האורחים לא מפסיקים לדבר על האירוע, האדרנלין עדיין בגוף, ואתם נשארים עם חוויה של פעם בחיים וזיכרון מוזיקלי מושלם.",
    icon: Star,
  },
] as const;

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
      <span className="relative flex size-4 items-center justify-center rounded-full bg-background ring-2 ring-neon-purple/80 ring-offset-2 ring-offset-background">
        <span className="absolute inset-0 rounded-full bg-neon-purple/40 blur-md" />
        <span className="relative size-2 rounded-full bg-gradient-to-br from-neon-purple to-electric-blue shadow-[0_0_12px_rgba(37,99,235,0.75)]" />
      </span>
    </div>
  );
}

function StepCard({
  step,
  className,
}: {
  step: JourneyStep;
  className?: string;
}) {
  const Icon = step.icon;
  return (
    <article
      className={cn(
        "w-full max-w-xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(37,99,235,0.06)] backdrop-blur-md",
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

export function EventFlow() {
  return (
    <section
      id="event-flow"
      className="scroll-mt-24 border-y border-white/5 bg-background px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-balance text-center text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          המסע שלכם
          <br />
          מהרגע הראשון ועד לרחבה בוערת
        </h2>

        <div className="relative mt-16 md:mt-24">
          <div
            className="pointer-events-none absolute inset-y-0 start-5 w-px md:start-1/2 md:-translate-x-1/2"
            aria-hidden
          >
            <div className="h-full w-full bg-gradient-to-b from-neon-purple/50 via-white/15 to-electric-blue/40" />
          </div>

          <ol className="relative m-0 list-none space-y-0 p-0">
            {JOURNEY_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              const key = `${step.title}-${index}`;

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

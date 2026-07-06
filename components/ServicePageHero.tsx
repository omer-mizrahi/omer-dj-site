"use client";

import Link from "next/link";

import { QuickLeadForm } from "@/components/QuickLeadForm";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServicePageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description?: string;
  headingId: string;
  defaultEventType?: string;
  contextNote?: string;
  showHomeButton?: boolean;
};

export function ServicePageHero({
  eyebrow,
  title,
  subtitle,
  description,
  headingId,
  defaultEventType,
  contextNote,
  showHomeButton = true,
}: ServicePageHeroProps) {
  return (
    <section
      className="relative w-full overflow-x-hidden border-b border-white/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/70 to-[#050505]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-700/25 via-blue-500/10 to-transparent opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute start-0 top-1/4 size-64 rounded-full bg-neon-purple/10 blur-3xl sm:size-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute end-0 bottom-0 size-56 rounded-full bg-electric-blue/10 blur-3xl sm:size-80"
        aria-hidden
      />

      <div className="relative mx-auto flex w-full min-w-0 max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">
        <div className="w-full min-w-0 flex-1 text-center lg:text-start">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise">
            {eyebrow}
          </p>
          <h1
            id={headingId}
            className="mt-4 text-balance break-words text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            {title}
          </h1>
          {subtitle ? (
            <h2 className="mt-6 text-pretty text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
              {subtitle}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {description}
            </p>
          ) : null}
          {showHomeButton ? (
            <div className="mt-8 flex justify-center lg:justify-start">
              <Button
                nativeButton={false}
                variant="outline"
                render={<Link href="/" />}
                className="h-11 rounded-full border-white/15 bg-background/40 backdrop-blur-sm"
              >
                חזרה לדף הבית
              </Button>
            </div>
          ) : null}
        </div>

        <div className="w-full min-w-0 shrink-0 lg:max-w-md">
          <QuickLeadForm
            defaultEventType={defaultEventType}
            contextNote={contextNote}
          />
        </div>
      </div>
    </section>
  );
}

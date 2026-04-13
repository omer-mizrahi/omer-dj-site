import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { EventFlow } from "@/components/EventFlow";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, isValidServiceSlug, services } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "שירות לא נמצא" };
  }
  return {
    title: `${service.title} — עומר מזרחי | DJ Omer Mizrahi`,
    description: service.description,
    openGraph: {
      title: `${service.title} — עומר מזרחי`,
      description: service.description,
      locale: "he_IL",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  if (!isValidServiceSlug(slug)) {
    notFound();
  }
  const service = getServiceBySlug(slug) as NonNullable<
    ReturnType<typeof getServiceBySlug>
  >;

  return (
    <main className="flex flex-1 flex-col">
      <section
        className="relative overflow-hidden border-b border-white/10 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
        aria-labelledby="service-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-neon-purple/20 via-background to-electric-blue/15"
          aria-hidden
        />
        <div className="pointer-events-none absolute -start-32 top-1/4 size-[28rem] rounded-full bg-neon-purple/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -end-24 bottom-0 size-80 rounded-full bg-electric-blue/10 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise">
           עומר מזרחי - שירותי מוזיקה
          </p>
          <h1
            id="service-hero-heading"
            className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
          >
            {service.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {service.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/#lead-form" />}
              className={cn(
                "h-11 rounded-full border-0 bg-gradient-to-l from-neon-purple to-electric-blue px-8 text-base font-semibold text-white shadow-lg shadow-neon-purple/20",
                "hover:brightness-110"
              )}
            >
              בדוק זמינות לאירוע
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              render={<Link href="/" />}
              className="h-11 rounded-full border-white/15 bg-background/40 backdrop-blur-sm"
            >
              חזרה לדף הבית
            </Button>
          </div>
        </div>
      </section>

      <EventFlow />

      <section
        className="mx-auto w-full max-w-6xl flex-1 px-4 py-16 sm:px-6 lg:px-8"
        aria-labelledby="service-gallery-heading"
      >
        <h2
          id="service-gallery-heading"
          className="text-center text-2xl font-bold text-foreground sm:text-3xl"
        >
          גלריה
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
          כאן תוצג גלריית תמונות וסרטונים מהאירועים — בקרוב.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-2xl border border-dashed border-white/15 bg-surface/40 ring-1 ring-white/5"
            />
          ))}
        </div>
      </section>
    </main>
  );
}

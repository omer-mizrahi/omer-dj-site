import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";

import { EventFlow } from "@/components/EventFlow";
import { LeadForm } from "@/components/LeadForm";
import { ReviewGallery } from "@/components/ReviewGallery";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, isValidServiceSlug, services } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Gallery } from "@/components/Gallery";

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
    title: `דיג'יי ל${service.title} — עומר מזרחי | DJ Omer Mizrahi`,
    description: service.description,
    openGraph: {
      title: `דיג'יי ל${service.title} — עומר מזרחי`,
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
    <main dir="rtl" className="flex flex-1 flex-col bg-background">
      <section
        className="relative flex min-h-[60vh] items-center justify-center overflow-hidden border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8"
        aria-labelledby="service-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/70 to-[#050505]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 bg-blue-glow opacity-30" aria-hidden />
        <div className="pointer-events-none absolute -start-32 top-1/4 size-[28rem] rounded-full bg-neon-purple/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -end-24 bottom-0 size-80 rounded-full bg-electric-blue/10 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise">
            עומר מזרחי - שירותי מוזיקה
          </p>
          <h1
            id="service-hero-heading"
            className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            דיג&apos;יי ל{service.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground ">
            {service.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="#lead-form" />}
              className={cn(
                "h-12 rounded-full border-0 bg-blue-glow px-8 text-base font-semibold text-white shadow-lg",
                "shadow-[0_0_32px_rgba(37,99,235,0.25),0_10px_40px_rgba(11,31,74,0.35)]",
                "hover:brightness-110"
              )}
            >
              בדקו זמינות
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

      <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
          <div className="md:order-2 text-start">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              הגישה שלי
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.longDescription}
            </p>
          </div>

          <div className="md:order-1">
            <div
              className={cn(
                "rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl",
                "shadow-[0_0_48px_rgba(37,99,235,0.08)] ring-1 ring-inset ring-white/5 sm:p-8"
              )}
            >
              <h3 className="text-lg font-bold text-foreground sm:text-xl">
                הסטנדרט שלי, השקט הנפשי שלכם
              </h3>
              <ul className="mt-6 space-y-4" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-start">
                    <span
                      className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-glow ring-1 ring-white/10"
                      aria-hidden
                    >
                      <CheckCircle className="size-5 text-white" />
                    </span>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <EventFlow />
      <Gallery />
      <Testimonials />
      <ReviewGallery />
      <LeadForm />

    </main>
  );
}

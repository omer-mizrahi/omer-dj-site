import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";

import { EventFlow } from "@/components/EventFlow";
import { Gallery } from "@/components/Gallery";
import { LeadForm } from "@/components/LeadForm";
import { ReviewGallery } from "@/components/ReviewGallery";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import {
  getLocationBySlug,
  getServiceBySlug,
  isValidLocationSlug,
  isValidServiceSlug,
  locationEntries,
  services,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string; locationSlug: string }> };

export async function generateStaticParams() {
  return services.flatMap((service) =>
    locationEntries.map((location) => ({
      slug: service.slug,
      locationSlug: location.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locationSlug } = await params;
  const service = getServiceBySlug(slug);
  const location = getLocationBySlug(locationSlug);
  if (!service || !location) {
    return { title: "עמוד לא נמצא" };
  }
  const title = `דיג'יי ל${service.title} ב${location.name} | עומר מזרחי`;
  const description = `דיג'יי מקצועי ל${service.title} ב${location.name}. עומר מזרחי משלב מוזיקה מזרחית, אפרו האוס ולהיטים עכשוויים — סאונד, תאורה ואנרגיה שמחזיקות את הרחבה מההתחלה ועד הסוף.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: "he_IL",
    },
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { slug, locationSlug } = await params;
  if (!isValidServiceSlug(slug) || !isValidLocationSlug(locationSlug)) {
    notFound();
  }
  const service = getServiceBySlug(slug) as NonNullable<
    ReturnType<typeof getServiceBySlug>
  >;
  const location = getLocationBySlug(locationSlug) as NonNullable<
    ReturnType<typeof getLocationBySlug>
  >;

  return (
    <main dir="rtl" className="flex w-full flex-1 flex-col overflow-x-hidden bg-background">
      <section
        className="relative flex min-h-[60vh] items-center justify-center overflow-hidden border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8"
        aria-labelledby="service-location-hero-heading"
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
          className="pointer-events-none absolute -start-32 top-1/4 size-[28rem] rounded-full bg-neon-purple/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -end-24 bottom-0 size-80 rounded-full bg-electric-blue/10 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise">
            {location.name} · {service.title}
          </p>
          <h1
            id="service-location-hero-heading"
            className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            דיג&apos;יי ל{service.title} ב{location.name}
          </h1>
          <h2 className="mx-auto mt-6 max-w-2xl text-pretty text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
            מחפשים דיג&apos;יי ל{service.title} ב{location.name}? הגעתם למקום הנכון.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            עומר מזרחי מגיע ל{location.name} עם ניסיון עשיר ב{service.title} — מוזיקה
            מדויקת לקהל, ציוד מקצועי וליווי צמוד מהתכנון ועד הרגע האחרון על הרחבה.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="#lead-form" />}
              className={cn(
                "h-12 rounded-full border-0 bg-gradient-to-l from-blue-700 to-blue-500 px-8 text-base font-semibold text-white shadow-lg",
                "shadow-[0_0_32px_rgba(34,211,238,0.16),0_10px_40px_rgba(0,0,0,0.35)]",
                "hover:brightness-110",
              )}
            >
              בדקו זמינות ב{location.name}
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              render={<Link href={`/services/${service.slug}`} />}
              className="h-11 rounded-full border-white/15 bg-background/40 backdrop-blur-sm"
            >
              כל מה שצריך לדעת על {service.title}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
          <div className="text-start md:order-2">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              דיג&apos;יי ל{service.title} ב{location.name} — הגישה שלי
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {service.longDescription}
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              חוגגים {service.title} ב{location.name} והסביבה? אני כאן בשבילכם. דברו
              איתי על התאריך והחזון שלכם, ויחד נבנה את הפסקול המושלם לאירוע של פעם
              בחיים — עם שילוב של מוזיקה מזרחית, אפרו האוס ולהיטים שמחזיקים את כל
              האורחים על הרחבה.
            </p>
          </div>

          <div className="md:order-1">
            <div
              className={cn(
                "rounded-3xl border border-blue-500/20 bg-[#0a0f1c]/40 p-6 text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl",
                "ring-1 ring-inset ring-white/5 sm:p-8",
              )}
            >
              <h3 className="text-lg font-bold text-white sm:text-xl">
                למה לבחור בעומר מזרחי ל{service.title} ב{location.name}?
              </h3>
              <ul className="mt-6 space-y-4" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-start">
                    <span
                      className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-l from-blue-700 to-blue-500 ring-1 ring-white/10"
                      aria-hidden
                    >
                      <CheckCircle className="size-5 text-white" />
                    </span>
                    <p className="text-base leading-relaxed text-gray-200">
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

      <section
        className="border-t border-white/10 bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        aria-labelledby="related-pages-heading"
      >
        <div
          className={cn(
            "mx-auto max-w-4xl rounded-3xl border border-blue-500/20 bg-[#0a0f1c]/40 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8",
            "ring-1 ring-inset ring-white/5",
          )}
        >
          <h2
            id="related-pages-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            עוד על {service.title} ו{location.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            גלו עוד מידע על השירות, האזור, או שירותים נוספים שאני מנגן בהם ב
            {location.name}.
          </p>
          <nav
            aria-label={`קישורים קשורים ל${service.title} ב${location.name}`}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            <Link
              href={`/services/${service.slug}`}
              className={cn(
                "inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors",
                "hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-foreground",
              )}
            >
              דיג&apos;יי ל{service.title}
            </Link>
            <Link
              href={`/locations/${location.slug}`}
              className={cn(
                "inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors",
                "hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-foreground",
              )}
            >
              דיג&apos;יי ב{location.name}
            </Link>
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/${location.slug}`}
                  className={cn(
                    "inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors",
                    "hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-foreground",
                  )}
                >
                  דיג&apos;יי ל{s.title} ב{location.name}
                </Link>
              ))}
          </nav>
        </div>
      </section>
    </main>
  );
}

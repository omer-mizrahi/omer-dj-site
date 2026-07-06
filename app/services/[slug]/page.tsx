import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";

import { EventFlow } from "@/components/EventFlow";
import { LeadForm } from "@/components/LeadForm";
import { ReviewGallery } from "@/components/ReviewGallery";
import { ServicePageHero } from "@/components/ServicePageHero";
import { Testimonials } from "@/components/Testimonials";
import {
  getServiceBySlug,
  isValidServiceSlug,
  locationEntries,
  SERVICE_TO_EVENT_TYPE,
  services,
} from "@/lib/site-config";
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
  const title = `דיג'יי ל${service.title} | עומר מזרחי - הופכים את האירוע למסיבה`;
  const description = `דיג'יי מקצועי ל${service.title} בפריסה ארצית — ירושלים, תל אביב, המרכז והסביבה. עומר מזרחי מביא סאונד, תאורה ואנרגיה שמחזיקות את הרחבה מההתחלה ועד הסוף.`;
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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  if (!isValidServiceSlug(slug)) {
    notFound();
  }
  const service = getServiceBySlug(slug) as NonNullable<
    ReturnType<typeof getServiceBySlug>
  >;

  return (
    <main dir="rtl" className="flex w-full flex-1 flex-col overflow-x-hidden bg-background">
      <ServicePageHero
        eyebrow="עומר מזרחי - שירותי מוזיקה"
        title={`דיג'יי ל${service.title}`}
        description={service.subtitle}
        headingId="service-hero-heading"
        defaultEventType={SERVICE_TO_EVENT_TYPE[service.slug]}
        contextNote={`דיג'יי ל${service.title}`}
      />

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
                "rounded-3xl bg-[#0a0f1c]/40 backdrop-blur-xl border border-blue-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-6 text-white",
                "ring-1 ring-inset ring-white/5 sm:p-8"
              )}
            >
              <h3 className="text-lg font-bold text-white sm:text-xl">
                הסטנדרט שלי, השקט הנפשי שלכם
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
        aria-labelledby="service-locations-heading"
      >
        <div
          className={cn(
            "mx-auto max-w-4xl rounded-3xl border border-blue-500/20 bg-[#0a0f1c]/40 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8",
            "ring-1 ring-inset ring-white/5"
          )}
        >
          <h2
            id="service-locations-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            אזורי שירות מרכזיים עבור {service.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            אני מגיע ל{service.title} בכל רחבי הארץ. בחרו את האזור שלכם וגלו עוד על
            השירות המקצועי שאני מביא לכל אירוע.
          </p>
          <nav
            aria-label={`אזורי שירות ל${service.title}`}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            {locationEntries.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className={cn(
                  "inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors",
                  "hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-foreground"
                )}
              >
                דיג&apos;יי ב{location.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}

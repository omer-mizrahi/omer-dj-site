import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  getLocationBySlug,
  isValidLocationSlug,
  locationEntries,
  services,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { EventFlow } from "@/components/EventFlow";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { ReviewGallery } from "@/components/ReviewGallery";
import { LeadForm } from "@/components/LeadForm";

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return locationEntries.map((l) => ({ city: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocationBySlug(city);
  if (!loc) {
    return { title: "אזור לא נמצא" };
  }
  const title = `דיג'יי ב${loc.name} | חתונות, חינות ואירועים - עומר מזרחי`;
  const description = `דיג'יי ב${loc.name} לחתונות, חינות, בר ובת מצווה ואירועים פרטיים. עומר מזרחי משלב מוזיקה מזרחית, אפרו האוס ולהיטים עכשוויים כדי להפוך את האירוע שלכם ב${loc.name} למסיבה בלתי נשכחת.`;
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

export default async function LocationPage({ params }: Props) {
  const { city } = await params;
  if (!isValidLocationSlug(city)) {
    notFound();
  }
  const loc = getLocationBySlug(city) as NonNullable<
    ReturnType<typeof getLocationBySlug>
  >;

  return (
    <main className="flex w-full flex-1 flex-col overflow-x-hidden">
      <article className="border-b border-white/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-turquoise">
            DJ באזור {loc.name}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            דיג&apos;יי ב{loc.name}
          </h1>
          <h2 className="mt-6 text-lg font-semibold leading-relaxed text-foreground sm:text-xl">
            מחפשים דיג&apos;יי לאירוע, חתונה או חינה ב{loc.name}? הגעתם למקום הנכון.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            מחפשים דיג&apos;יי ב{loc.name}? עומר מזרחי מגיע להקפיץ לכם את האירוע —
            מוזיקה מדויקת לקהל, ציוד מקצועי, וליווי צמוד מהתכנון ועד הרגע האחרון
            על הרחבה.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            בין אם מדובר בחתונה, בר או בת מצווה, אירוע חברה או מסיבה פרטית — אנחנו
            מתאימים את הפלייליסט, העוצמה והאווירה כך שהאורחים שלכם יזכרו את הערב
            הזה זמן רב אחרי שירדו מהרחבה.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
          חוגגים ב{loc.name} והסביבה הקרובה? אני כאן בשבילכם. דברו איתי על התאריך והחזון שלכם, ויחד נבנה את הפסקול המושלם לאירוע של פעם בחיים.

          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/#lead-form" />}
              className={cn(
                "h-11 rounded-full border-0 bg-gradient-to-l from-blue-700 to-blue-500 px-8 text-base font-semibold text-white shadow-lg shadow-black/20",
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
              כל השירותים בדף הבית
            </Button>
          </div>
        </div>  
      </article>

          <EventFlow />
      <Gallery />
      <Testimonials />
      <ReviewGallery />
      <LeadForm />

      <section
        className="border-t border-white/10 bg-[#050505] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        aria-labelledby="location-services-heading"
      >
        <div
          className={cn(
            "mx-auto max-w-4xl rounded-3xl border border-blue-500/20 bg-[#0a0f1c]/40 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8",
            "ring-1 ring-inset ring-white/5"
          )}
        >
          <h2
            id="location-services-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            אירועים שאני מנגן בהם ב{loc.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            בחרו את סוג האירוע שלכם וגלו איך אני מביא את האנרגיה והמוזיקה המושלמת
            לכל חגיגה ב{loc.name}.
          </p>
          <nav
            aria-label={`שירותי דיג'יי ב${loc.name}`}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={cn(
                  "inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm transition-colors",
                  "hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-foreground"
                )}
              >
                דיג&apos;יי ל{service.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}

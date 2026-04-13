import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  getLocationBySlug,
  isValidLocationSlug,
  locationEntries,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

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
  const title = `דיג'יי ב${loc.name} - עומר מזרחי | DJ Omer Mizrahi`;
  const description = `מחפשים דיג'יי ב${loc.name}? עומר מזרחי מגיע להקפיץ לכם את האירוע עם סאונד, תאורה וחוויה מלאה.`;
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
    <main className="flex flex-1 flex-col">
      <article className="border-b border-white/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold text-turquoise">
            DJ באזור {loc.name}
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            דיג&apos;יי ב{loc.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
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
            שירות מגיע ל{loc.name} ולסביבה הקרובה. דברו איתנו על התאריך, סוג
            האירוע והחזון — ונבנה יחד חוויה שמדברת בשפה שלכם.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/#lead-form" />}
              className={cn(
                "h-11 rounded-full border-0 bg-gradient-to-l from-neon-purple to-electric-blue px-8 text-base font-semibold text-white shadow-lg shadow-neon-purple/20",
                "hover:brightness-110"
              )}
            >
              בדוק זמינות ב{loc.name}
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
    </main>
  );
}

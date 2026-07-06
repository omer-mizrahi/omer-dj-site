import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

import { articles } from "@/lib/articles-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "מגזין | עומר מזרחי — טיפים ומאמרים על דיג'יי ואירועים",
  description:
    "מאמרים, מדריכים וטיפים מקצועיים על בחירת דיג'יי, תכנון אירועים, מוזיקה לאירועים ועוד — מהמומחה עומר מזרחי.",
  openGraph: {
    title: "מגזין | עומר מזרחי",
    description:
      "מאמרים, מדריכים וטיפים מקצועיים על דיג'יי ואירועים — מהמומחה עומר מזרחי.",
    locale: "he_IL",
  },
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("he-IL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <main dir="rtl" className="flex w-full flex-1 flex-col overflow-x-hidden bg-background">
      <section className="relative overflow-hidden border-b border-white/10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-700/15 via-transparent to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -start-32 top-0 size-96 rounded-full bg-neon-purple/10 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-turquoise">
            מגזין
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            מאמרים וטיפים לתכנון האירוע המושלם
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            מדריכים מקצועיים, תובנות מהשטח וטיפים שיעזרו לכם לבחור נכון, לתכנן
            חכם ולהפוך כל אירוע לחוויה בלתי נשכחת.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2">
          {sortedArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className={cn(
                "group flex flex-col overflow-hidden rounded-3xl border border-blue-500/20 bg-[#0a0f1c]/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl",
                "ring-1 ring-inset ring-white/5 transition-all duration-300",
                "hover:border-blue-500/40 hover:shadow-[0_8px_40px_0_rgba(59,130,246,0.15)]",
              )}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent"
                  aria-hidden
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="size-3.5 shrink-0" aria-hidden />
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                </div>

                <h2 className="mt-3 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-turquoise sm:text-2xl">
                  {article.title}
                </h2>

                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.metaDescription}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-turquoise">
                  קראו עוד
                  <ArrowLeft
                    className="size-4 transition-transform group-hover:-translate-x-1"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

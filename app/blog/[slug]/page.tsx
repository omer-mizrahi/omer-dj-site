import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar } from "lucide-react";

import {
  articles,
  getArticleBySlug,
  isValidArticleSlug,
} from "@/lib/articles-config";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "מאמר לא נמצא" };
  }
  return {
    title: `${article.title} | עומר מזרחי`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      locale: "he_IL",
      images: [{ url: article.imageUrl, alt: article.title }],
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("he-IL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  if (!isValidArticleSlug(slug)) {
    notFound();
  }
  const article = getArticleBySlug(slug) as NonNullable<
    ReturnType<typeof getArticleBySlug>
  >;

  return (
    <main dir="rtl" className="flex w-full flex-1 flex-col overflow-x-hidden bg-background">
      <article>
        <header className="relative overflow-hidden border-b border-white/10">
          <div className="relative aspect-[21/9] max-h-[28rem] w-full sm:aspect-[2.5/1]">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/30"
              aria-hidden
            />
          </div>

          <div className="relative mx-auto max-w-3xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 lg:px-8">
            <Link
              href="/blog"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors",
                "hover:text-turquoise",
              )}
            >
              <ArrowRight className="size-4" aria-hidden />
              חזרה למגזין
            </Link>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="size-4 shrink-0" aria-hidden />
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </div>

            <h1 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {article.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {article.metaDescription}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div
            className={cn(
              "rounded-3xl border border-blue-500/20 bg-[#0a0f1c]/40 p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-10",
              "ring-1 ring-inset ring-white/5",
            )}
          >
            <div className="prose prose-invert max-w-none space-y-6">
              {article.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-[1.85] text-gray-200 sm:text-lg sm:leading-[1.9]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/blog"
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors",
                "hover:border-blue-500/40 hover:bg-blue-500/10",
              )}
            >
              <ArrowRight className="size-4" aria-hidden />
              חזרה למגזין
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

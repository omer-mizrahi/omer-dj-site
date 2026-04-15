import Link from "next/link";
import { ArrowLeft, Heart, Mic, Speaker, Volume2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/972547672082";

const items = [
  { label: "הקלטות בר/בת מצווה", Icon: Mic },
  { label: "הקלטות ברכת כלה/חתן", Icon: Heart },
  { label: "הגברה וסאונד לאירועים", Icon: Speaker },
  { label: "הגברה לטקסים מוסדיים", Icon: Volume2 },
] as const;

export function ComplementaryServices() {
  return (
    <section className="border-t border-white/5 bg-background/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            שירותים משלימים
          </h2>
          <p className="mt-2 text-pretty text-sm text-muted-foreground sm:text-base">
            פתרונות סאונד, הגברה והקלטות אולפן
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {items.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-start gap-3 text-center"
            >
              <Icon className="size-7 text-primary" aria-hidden />
              <p className="text-sm text-gray-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            לפרטים והצעת מחיר
            <ArrowLeft className="ms-1.5 size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}


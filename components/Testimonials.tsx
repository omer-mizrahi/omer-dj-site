"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "שיר ועידן",
    event: "חתונה",
    text: "עומר פשוט פירק את הרחבה! מהרגע הראשון של קבלת הפנים עם הדיפ האוס ועד לטירוף של האפטר פארטי. הקהל לא רצה ללכת הביתה.",
  },
  {
    name: "מיכל, מנהלת HR",
    event: "אירוע חברה - הייטק",
    text: "חיפשנו דיג'יי שיודע לקרוא קהל מעורב של עובדים, ועומר קלע בול. הרים את האנרגיה בדיוק בזמן הנכון, סאונד מטורף וחוויית שירות ברמה הכי גבוהה שיש.",
  },
  {
    name: "רועי ומאיה",
    event: "חתונה",
    text: "הבחירה הכי טובה שעשינו בחתונה. עומר ידע לשלב את המוזיקה המרוקאית של המשפחה עם אלקטרוניקה מודרנית בצורה כל כך חלקה. אמן אמיתי.",
  },
] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="size-4 fill-yellow-400 text-yellow-400"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-y border-white/5 bg-[#09090b] px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          <span
            className="bg-gradient-to-l from-neon-purple via-fuchsia-400 to-electric-blue bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: "text" }}
          >
            מה אומרים עלינו
          </span>
        </h2>

        <motion.ul
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((t) => (
            <motion.li key={t.name} variants={item} className="list-none">
              <article
                className={cn(
                  "group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm",
                  "transition-[transform,box-shadow,border-color] duration-300 ease-out",
                  "hover:-translate-y-2 hover:border-neon-purple/40 hover:shadow-[0_0_32px_rgba(192,38,252,0.12),0_12px_40px_rgba(0,0,0,0.35)]",
                  "hover:ring-1 hover:ring-electric-blue/20"
                )}
              >
                <Quote
                  className="pointer-events-none absolute -start-2 top-4 size-24 -rotate-6 text-white/[0.04]"
                  aria-hidden
                />
                <div className="relative flex h-full flex-col">
                  <StarRow />
                  <p className="mt-4 flex-1 text-pretty text-base italic leading-relaxed text-muted-foreground">
                    {t.text}
                  </p>
                  <div className="mt-6 border-t border-white/5 pt-4 text-start">
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="mt-1 text-sm font-medium text-turquoise">
                      {t.event}
                    </p>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

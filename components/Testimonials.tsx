"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "שיר ועידן",
    event: "חתונה",
    text: "עומר פשוט פירק את הרחבה! מהרגע הראשון של קבלת הפנים עם הדיפ האוס ועד לטירוף של האפטר פארטי. הקהל לא רצה ללכת הביתה.",
  },
  {
    id: 2,
    name: "מיכל",
    event: "אירוע חברה",
    text: "חיפשנו דיג'יי שיודע לקרוא קהל מעורב של עובדים, ועומר קלע בול.עומר בחור נעים ואיש שירות ברמה גבוהה.",
  },
  {
    id: 3,
    name: "גל ורון",
    event: "חתונה",
    text: "הבחירה הכי טובה שעשינו בחתונה. עומר ידע לשלב את כל הבקשות שלנו בצורה כל כך חלקה. אלוף אמיתי.",
  },
  {
    id: 4,
    name: "רונית",
    event: "בר מצווה",
    text: "לא תיארתי לעצמי בכלל שיהיה כל כך שמח בבר מצווה של הבן שלי, עומר אתה אלוף!",
  },
  {
    id: 5,
    name: "מאי ואיתי",
    event: "חתונה",
    text: "עומר אתה הבחירה הכי טוב שלנו!!!, איזה כיף שבחנו בך! כולם מדברים עליך ועל כמה שהיה שמח. אנחנו אוהבים אותך!",
  },
  {
    id: 6,
    name: "טל ועידן",
    event: "חתונה",
    text: `עומר אתה אחד יחיד ומיוחד!
אנחנו עדיין בהיי מטורף מהאירוע ושומעים מלא פירגונים מהאורחים.
תודה שעשית לנו את הערב הכי מאושר בחיים שלנו כל כך שמח!
אתה מלךךך!
`,
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
      className="scroll-mt-24 border-y border-white/5 bg-background px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          <span
            className="bg-gradient-to-l from-blue-700 to-blue-500 bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: "text" }}
          >
           לקוחות מספרים
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
                  "group relative h-full overflow-hidden rounded-2xl bg-[#0a0f1c]/40 backdrop-blur-xl border border-blue-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-6",
                  "transition-[transform,box-shadow,border-color] duration-300 ease-out",
                  "hover:-translate-y-2 hover:brightness-[1.06]"
                )}
              >
                <Quote
                  className="pointer-events-none absolute -start-2 top-4 size-24 -rotate-6 text-white/[0.04]"
                  aria-hidden
                />
                <div className="relative flex h-full flex-col">
                  <StarRow />
                  <p className="mt-4 flex-1 text-pretty text-base italic leading-relaxed text-gray-200">
                    {t.text}
                  </p>
                  <div className="mt-6 border-t border-white/5 pt-4 text-start">
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="mt-1 text-sm font-medium text-blue-300">
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

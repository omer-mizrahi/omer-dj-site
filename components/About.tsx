"use client";

import { motion } from "framer-motion";
import { Activity, Music2, Sliders } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Activity,
    title: "קריאת קהל אבסולוטית",
    description:
      "מרגיש את הרחבה ויודע בדיוק איזה שיר ירים את האנרגיה עכשיו.",
  },
  {
    icon: Sliders,
    title: "התאמה אישית מלאה",
    description:
      "בלי שטנצים. כל אירוע נתפר בדיוק למידות שלכם ולחזון שלכם.",
  },
  {
    icon: Music2,
    title: "שילוב סגנונות חלק",
    description:
      "מעברים טבעיים בין מזרחית, אלקטרוניקה, מיינסטרים והיפ-הופ, בלי להוריד את הקצב.",
  },
] as const;

const textBlock = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const textLine = {
  hidden: { opacity: 0, x: 36 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const imageMotion = {
  hidden: { opacity: 0, x: -40, y: 16 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const PORTRAIT_IMAGE =
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-[#09090b] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* טקסט — עמודה ראשונה בגריד (ב־RTL: צד ימין) */}
          <motion.div
            className="order-2 text-start lg:order-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={textBlock}
          >
            <motion.h2
              variants={textLine}
              className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
            >
              <span
                className="bg-gradient-to-l from-neon-purple via-fuchsia-400 to-electric-blue bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text" }}
              >
                האדם מאחורי העמדה
              </span>
            </motion.h2>

            <motion.p
              variants={textLine}
              className="mt-6 text-lg leading-relaxed text-muted-foreground"
            >
              נעים מאוד, אני עומר מזרחי. עם למעלה מ-15 שנות ניסיון בעמדה, למדתי
              שאירוע מושלם לא בנוי רק מפלייליסט טוב, אלא מאנרגיה, טיימינג וקריאת
              הקהל ברמת השניות.
            </motion.p>

            <motion.p
              variants={textLine}
              className="mt-4 text-lg leading-relaxed text-muted-foreground"
            >
              כיוצר ומפיק מוזיקלי, אני חי ונושם סאונד. זה מאפשר לי להביא לרחבה
              עריכות מיוחדות, רמיקסים שהכנתי באולפן, וחתימת סאונד מדויקת שלא תשמעו
              בשום מקום אחר – במיוחד כשמדובר בשילוב העוצמתי של Afro, Arabic &
              Melodic House.
            </motion.p>

            <motion.ul
              variants={textLine}
              className="mt-10 flex flex-col gap-6"
              role="list"
            >
              {features.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-4">
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple/30 to-electric-blue/25 text-neon-purple ring-1 ring-white/10"
                    aria-hidden
                  >
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* תמונה — עמודה שנייה (ב־RTL: צד שמאל) */}
          <motion.div
            className="order-1 lg:order-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={imageMotion}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="pointer-events-none absolute inset-0 -z-10 scale-90 rounded-full bg-gradient-to-br from-neon-purple/35 via-electric-blue/20 to-transparent blur-3xl"
                aria-hidden
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_0_48px_rgba(192,38,252,0.12)] ring-1 ring-white/5">
                <Image
                  src={PORTRAIT_IMAGE}
                  alt="עומר מזרחי ליד העמדה"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  priority={false}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

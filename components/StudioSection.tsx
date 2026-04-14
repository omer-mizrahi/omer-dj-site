"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { studioMedia } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function StudioSection() {
  return (
    <section
      id="studio"
      className="scroll-mt-24 bg-[#050505] px-4 py-20 sm:px-6 lg:px-8"
      aria-labelledby="studio-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="text-start md:order-2">
            <h2
              id="studio-heading"
              className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              <span
                className="bg-gradient-to-l from-blue-700 to-blue-500 bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text" }}
              >
                לא רק מתקלט - יוצר ומפיק מוזיקלי.
              </span>
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            הייחודיות של האירוע שלכם מתחילה הרבה לפני שכולם נפגשים ברחבה. באולפן שלי אני יוצר ומפיק גרסאות ועריכות אקסקלוסיביות, שמיועדים בדיוק לרחבה ולקהל שלכם. חותמת סאונד שאי אפשר לשמוע בשום מקום אחר וזה חלק בלתי נפרד מהאיכות ומהשמחה שתהיה ברחבה בזמן האירוע.
            כאומן ויוצר מוזיקלי יש לי את היכולת לקחת את הבקשות שלכם ולהפוך אותם ללהיטי רחבה עבור האירוע שלכם.
            </p>
            <br />
            <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          כך זה נראה מהאולפן שלי.
            </p>
          </div>

          <motion.div
            className="md:order-1"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="grid grid-cols-2 gap-4">
              {studioMedia.map((m) => (
                <motion.div
                  key={m.id}
                  variants={item}
                  className="relative aspect-square overflow-hidden rounded-xl bg-[#0a0f1c]/40 backdrop-blur-xl border border-blue-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
                >
                  {m.type === "video" ? (
                    <iframe
                      src={m.src}
                      title="Studio Video"
                      className="absolute inset-0 h-full w-full object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <Image
                      src={m.src}
                      alt={m.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


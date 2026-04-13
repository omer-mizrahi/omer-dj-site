"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    id: "song-choice",
    question: "האם אנחנו בוחרים את כל השירים לאירוע?",
    answer:
      "אתם נותנים את הכיוון, בוחרים את שירי החובה (ומה בשום אופן לא לנגן), ואני לוקח את זה משם. המומחיות שלי היא לקרוא את הקהל בזמן אמת ולתפור את המוזיקה לזרימה של הערב.",
  },
  {
    id: "genres",
    question: "אילו סגנונות מוזיקה אתה מנגן?",
    answer:
      "אני מנגן ושולט בכל סגנונות המוסיקה, ממיינסטרים, מזרחית וישראלי ועד לטכנו, האוס, טראנס, רגאטון, שחורה ושנות ה70-80-90.",
  },
  {
    id: "booking",
    question: "מתי כדאי לשריין תאריך?",
    answer:
      "התאריכים המבוקשים (במיוחד בעונת החתונות בקיץ) נתפסים חודשים מראש. מומלץ ליצור קשר בהקדם האפשרי כדי להבטיח את התאריך שלכם.",
  },
  {
    id: "Tradiotin",
    question: "האם אתה עושה גם אירועים דתיים?",
    answer:
      "בוודאי. חלק בלתי נפרד מהעבודה שלי כדיג'יי הוא היכולת להתאים את עצמי לכל סוג של קהל. המוזיקה והאנרגיה מותאמות באופן אישי לבקשתכם",
  },
] as const;

const triggerClassName = cn(
  "w-full py-4 text-right text-base font-semibold text-white",
  "hover:no-underline hover:text-neon-purple",
  "transition-colors duration-200",
  "focus-visible:ring-neon-purple/40",
  "[&_svg]:text-muted-foreground [&_svg]:transition-colors",
  "hover:[&_svg]:text-electric-blue"
);

const contentClassName = "pb-4 pt-0 text-base leading-relaxed text-gray-400";

export function FAQ() {
  return (
    <motion.section
      id="faq"
      className="scroll-mt-24 bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            שאלות נפוצות
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            כל מה שצריך לדעת לקראת האירוע שלכם
          </p>
        </div>

        <Accordion className="mt-12 w-full" defaultValue={[]} dir="rtl">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border-b border-white/10 last:border-b-0"
            >
              <AccordionTrigger className={triggerClassName}>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className={contentClassName}>
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}

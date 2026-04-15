"use client";

import { motion } from "framer-motion";
import { CalendarIcon, CheckCircle, Mail, MessageCircle, Phone } from "lucide-react";
import * as React from "react";
import { format } from "date-fns";
import { he } from "date-fns/locale";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const inputClassName = cn(
  "w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-start text-base text-foreground",
  "placeholder:text-muted-foreground/70",
  "transition-[box-shadow,border-color,background-color]",
  "focus:border-neon-purple/60 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-electric-blue/30",
  "focus:shadow-[0_0_0_1px_rgba(37,99,235,0.35),0_0_24px_rgba(11,31,74,0.22)]"
);

const labelClassName =
  "mb-2 block text-sm font-medium text-foreground";

const EVENT_TYPES = [
  { value: "wedding", label: "חתונה" },
  { value: "henna", label: "חינה" },
  { value: "bar-bat-mitzvah", label: "בר/בת מצווה" },
  { value: "corporate", label: "אירוע חברה" },
  { value: "private", label: "אירוע פרטי" },
  { value: "other", label: "אחר" },
] as const;

const selectTriggerClassName = cn(
  "relative flex h-auto min-h-[48px] w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-start text-base text-foreground",
  "transition-[box-shadow,border-color,background-color]",
  "focus:border-neon-purple/60 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-electric-blue/30",
  "focus:shadow-[0_0_0_1px_rgba(37,99,235,0.35),0_0_24px_rgba(11,31,74,0.22)]",
  "focus-visible:border-neon-purple/60 focus-visible:ring-2 focus-visible:ring-electric-blue/30",
  "focus-visible:shadow-[0_0_0_1px_rgba(37,99,235,0.35),0_0_24px_rgba(11,31,74,0.22)]",
  "data-placeholder:text-muted-foreground/70",
  "[&_svg]:text-muted-foreground"
);

const selectContentClassName = cn(
  "z-50 max-h-[min(24rem,var(--available-height)] border border-white/10 bg-background p-1.5 text-white shadow-xl shadow-black/50",
  "ring-1 ring-white/10",
  "[&_[data-slot=select-scroll-up-button]]:bg-background",
  "[&_[data-slot=select-scroll-down-button]]:bg-background"
);

const selectItemClassName = cn(
  "cursor-pointer rounded-lg py-2.5 pe-8 ps-3 text-base text-white outline-none",
  "focus:bg-white/10 focus:text-white",
  "data-highlighted:bg-white/10 data-highlighted:text-white",
  "data-[state=open]:bg-white/10",
  "[&_[data-slot=select-item-indicator]]:text-neon-purple"
);

const PHONE_DISPLAY = "054-7672082";
const PHONE_TEL = "+972547672082";
const WHATSAPP_LINK = "https://wa.me/972547672082";
const EMAIL = "omermofficial11@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/___omermizrahi___/";

const contactLinks: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sub: string;
  external?: boolean;
}[] = [
  {
    href: `tel:${PHONE_TEL}`,
    icon: Phone,
    label: PHONE_DISPLAY,
    sub: "התקשרו עכשיו",
  },
  {
    href: WHATSAPP_LINK,
    icon: MessageCircle,
    label: "שלחו הודעה בוואטסאפ",
    sub: "WhatsApp",
    external: true,
  },
  {
    href: INSTAGRAM_URL,
    icon: InstagramIcon,
    label: "עקבו באינסטגרם",
    sub: "Instagram",
    external: true,
  },
  {
    href: `mailto:${EMAIL}`,
    icon: Mail,
    label: EMAIL,
    sub: "אימייל",
  },
];

function ContactCard() {
  return (
    <div className="flex flex-col gap-3">
      {contactLinks.map(({ href, icon: Icon, label, sub, external }) => (
        <motion.a
          key={sub}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          whileHover={{ scale: 1.02, x: -2 }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className={cn(
            "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4",
            "backdrop-blur-sm transition-colors hover:border-neon-purple/35 hover:bg-white/[0.07]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-purple/50"
          )}
        >
          <span
            className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-purple/25 to-electric-blue/20 text-neon-purple ring-1 ring-white/10 transition group-hover:ring-neon-purple/30"
            aria-hidden
          >
            <Icon className="size-5" />
          </span>
          <span className="min-w-0 flex-1 text-start">
            <span className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {sub}
            </span>
            <span className="mt-0.5 block text-base font-semibold text-foreground group-hover:text-white">
              {label}
            </span>
          </span>
        </motion.a>
      ))}
    </div>
  );
}

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [whatsappOpenUrl, setWhatsappOpenUrl] = React.useState<string | null>(null);
  /** מצב נבחר בלבד — `undefined` = אין בחירה (מציג placeholder), ללא מעבר בין מחרוזת ריקה ל־undefined ב־value */
  const [eventType, setEventType] = React.useState("");
  const [eventDate, setEventDate] = React.useState<Date | undefined>(undefined);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (eventType === "") {
      return;
    }

    const fd = new FormData(form);
    const fullName = String(fd.get("fullName") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const eventTypeLabel =
      EVENT_TYPES.find((t) => t.value === eventType)?.label ?? eventType;
    const dateStr = eventDate ? format(eventDate, "dd/MM/yyyy") : "לא צוין";

    const message =
      `היי עומר, אשמח לבדוק זמינות לאירוע!
שם: ${fullName}
טלפון: ${phone}
סוג אירוע: ${eventTypeLabel}
` + `\u05ea\u05d0\u05e8\u05d9\u05da: ${dateStr}`;

    const whatsappUrl = `https://wa.me/972547672082?text=${encodeURIComponent(message)}`;
    setWhatsappOpenUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  }

  return (
    <motion.section
      id="lead-form"
      className="scroll-mt-24 border-y border-white/5 bg-background px-4 py-20 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            מוכנים לשריין את התאריך?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            השאירו פרטים ואחזור אליכם בהקדם, או צרו איתי קשר ישירות.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* טור ימני (RTL): טופס */}
          <div className="order-2 md:order-1">
            <div
              className={cn(
                "rounded-3xl bg-[#0a0f1c]/40 backdrop-blur-xl border border-blue-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-6 text-white",
                "ring-1 ring-inset ring-white/5 sm:p-8"
              )}
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center gap-5 py-10 text-center">
                  <div
                    className={cn(
                      "flex size-[4.5rem] items-center justify-center rounded-full",
                      "bg-gradient-to-br from-emerald-400/30 via-neon-purple/25 to-electric-blue/25",
                      "shadow-[0_0_36px_rgba(52,211,153,0.35),0_0_28px_rgba(37,99,235,0.28)]",
                      "ring-2 ring-emerald-400/45 ring-offset-2 ring-offset-[#09090b]/0"
                    )}
                    aria-hidden
                  >
                    <CheckCircle
                      className="size-10 text-emerald-400 drop-shadow-[0_0_14px_rgba(52,211,153,0.65)]"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-balance text-xl font-bold tracking-tight text-white sm:text-2xl">
                    מעולה! עברנו לווטסאפ.
                  </h3>
                  <p className="max-w-md text-pretty text-sm leading-relaxed text-gray-200 sm:text-base">
                    אם החלון לא נפתח אוטומטית,{" "}
                    <a
                      href={whatsappOpenUrl ?? WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "font-semibold text-neon-purple underline decoration-neon-purple/45 underline-offset-4",
                        "transition-colors hover:text-turquoise hover:decoration-turquoise/60"
                      )}
                    >
                      לחצו כאן
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="fullName" className={labelClassName}>
                      שם מלא
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="השם המלא שלכם"
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClassName}>
                      טלפון
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="05X-XXXXXXX"
                      className={inputClassName}
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventDate" className={labelClassName}>
                      תאריך האירוע
                    </label>
                    <input
                      type="hidden"
                      id="eventDate"
                      name="eventDate"
                      value={eventDate ? format(eventDate, "dd/MM/yyyy") : ""}
                    />
                    <Popover>
                      <PopoverTrigger
                        type="button"
                        className={cn(
                          inputClassName,
                          "flex items-center justify-between gap-3",
                          "data-[state=open]:border-neon-purple/60 data-[state=open]:bg-white/[0.08]"
                        )}
                        aria-label="בחרו תאריך"
                      >
                        <span
                          className={cn(
                            "min-w-0 flex-1 truncate text-start",
                            !eventDate && "text-muted-foreground/70"
                          )}
                          dir="ltr"
                        >
                          {eventDate ? format(eventDate, "dd/MM/yyyy") : "DD/MM/YYYY"}
                        </span>
                        <CalendarIcon className="size-5 shrink-0 text-muted-foreground" aria-hidden />
                      </PopoverTrigger>
                      <PopoverContent
                        dir="rtl"
                        className={cn(
                          "w-auto p-0",
                          "border border-white/10 bg-[#09090b] text-white shadow-xl shadow-black/50",
                          "ring-1 ring-white/10",
                          "[&_[data-slot=button]]:text-white/90",
                          "[&_[data-selected-single=true]]:bg-neon-purple [&_[data-selected-single=true]]:text-white",
                          "[&_[data-day]]:hover:bg-neon-purple/20",
                          "[&_.rdp-caption_label]:text-white",
                          "[&_.rdp-weekday]:text-white/60"
                        )}
                        sideOffset={8}
                      >
                        <Calendar
                          mode="single"
                          selected={eventDate}
                          onSelect={setEventDate}
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          captionLayout={"dropdown-buttons" as any}
                          fromYear={new Date().getFullYear()}
                          toYear={new Date().getFullYear() + 4}
                          locale={he}
                          weekStartsOn={0}
                          className="bg-[#09090b]"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <label htmlFor="eventType" className={labelClassName}>
                      סוג האירוע
                    </label>
                    <input
                      type="hidden"
                      name="eventType"
                      value={eventType}
                    />
                    <Select
                      value={eventType}
                      onValueChange={(v) => setEventType(v ?? "")}
                      required
                    >
                      <SelectTrigger
                        id="eventType"
                        size="default"
                        className={selectTriggerClassName}
                        aria-required="true"
                      >
                        <SelectValue placeholder="בחרו סוג אירוע" />
                      </SelectTrigger>
                      <SelectContent className={selectContentClassName}>
                        {EVENT_TYPES.map((opt) => (
                          <SelectItem
                            key={opt.value}
                            value={opt.value}
                            className={selectItemClassName}
                          >
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                    className="pt-2"
                  >
                    <button
                      type="submit"
                      className={cn(
                        "w-full rounded-full py-4 text-base font-bold text-white shadow-lg",
                        "bg-gradient-to-l from-blue-700 to-blue-500",
                        "shadow-[0_0_32px_rgba(59,130,246,0.22),0_10px_40px_rgba(0,0,0,0.35)]",
                        "ring-1 ring-white/15 transition-[filter,box-shadow] hover:brightness-110 hover:shadow-[0_0_44px_rgba(59,130,246,0.28)]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      )}
                    >
                      בדקו זמינות
                    </button>
                  </motion.div>
                </form>
              )}
            </div>
          </div>

          {/* טור שמאלי (RTL): יצירת קשר ישירה */}
          <div className="order-1 flex flex-col justify-center md:order-2">
            <h3 className="mb-6 text-start text-lg font-bold text-foreground sm:text-xl">
              צרו קשר
            </h3>
            <ContactCard />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

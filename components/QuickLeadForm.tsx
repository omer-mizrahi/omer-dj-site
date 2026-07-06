"use client";

import * as React from "react";
import { format } from "date-fns";
import { he } from "date-fns/locale";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getWhatsAppUrl } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const EVENT_TYPES = [
  { value: "wedding", label: "חתונה" },
  { value: "henna", label: "חינה" },
  { value: "bar-bat-mitzvah", label: "בר/בת מצווה" },
  { value: "corporate", label: "אירוע עסקי" },
  { value: "other", label: "אחר" },
] as const;

const inputClassName = cn(
  "w-full min-w-0 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-start text-base text-foreground",
  "placeholder:text-muted-foreground/70",
  "transition-[box-shadow,border-color,background-color]",
  "focus:border-neon-purple/60 focus:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-electric-blue/30",
);

const labelClassName = "mb-2 block text-sm font-medium text-foreground";

const selectTriggerClassName = cn(
  inputClassName,
  "flex h-auto min-h-[48px] items-center justify-between",
  "data-placeholder:text-muted-foreground/70",
);

type QuickLeadFormProps = {
  className?: string;
  defaultEventType?: string;
  contextNote?: string;
};

export function QuickLeadForm({
  className,
  defaultEventType = "",
  contextNote,
}: QuickLeadFormProps) {
  const idPrefix = React.useId();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [whatsappOpenUrl, setWhatsappOpenUrl] = React.useState<string | null>(
    null,
  );
  const [eventType, setEventType] = React.useState(defaultEventType);
  const [eventDate, setEventDate] = React.useState<Date | undefined>(undefined);

  React.useEffect(() => {
    setEventType(defaultEventType);
  }, [defaultEventType]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity() || eventType === "") {
      form.reportValidity();
      return;
    }

    const fd = new FormData(form);
    const fullName = String(fd.get("fullName") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const eventTypeLabel =
      EVENT_TYPES.find((t) => t.value === eventType)?.label ?? eventType;
    const dateStr = eventDate ? format(eventDate, "dd/MM/yyyy") : "לא צוין";

    const message = [
      "היי עומר, אשמח לבדוק זמינות לאירוע!",
      contextNote ? `הקשר: ${contextNote}` : null,
      `שם: ${fullName}`,
      `טלפון: ${phone}`,
      `סוג אירוע: ${eventTypeLabel}`,
      `תאריך: ${dateStr}`,
    ]
      .filter(Boolean)
      .join("\n");

    const whatsappUrl = getWhatsAppUrl(message);
    setWhatsappOpenUrl(whatsappUrl);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsSubmitted(true);
  }

  return (
    <div
      className={cn(
        "w-full min-w-0 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg",
        "shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] ring-1 ring-inset ring-white/5",
        className,
      )}
    >
      {isSubmitted ? (
        <div className="flex flex-col items-center gap-4 py-6 text-center">
          <CheckCircle
            className="size-10 text-emerald-400"
            strokeWidth={2}
            aria-hidden
          />
          <p className="text-lg font-bold text-foreground">מעולה! עברנו לווטסאפ.</p>
          <p className="text-sm text-muted-foreground">
            אם החלון לא נפתח,{" "}
            <a
              href={whatsappOpenUrl ?? getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-turquoise underline underline-offset-4"
            >
              לחצו כאן
            </a>
            .
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor={`${idPrefix}-fullName`} className={labelClassName}>
              שם מלא
            </label>
            <input
              id={`${idPrefix}-fullName`}
              name="fullName"
              type="text"
              autoComplete="name"
              required
              placeholder="השם המלא שלכם"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor={`${idPrefix}-phone`} className={labelClassName}>
              מספר טלפון
            </label>
            <input
              id={`${idPrefix}-phone`}
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
            <label htmlFor={`${idPrefix}-eventType`} className={labelClassName}>
              סוג האירוע
            </label>
            <input type="hidden" name="eventType" value={eventType} />
            <Select
              value={eventType}
              onValueChange={(v) => setEventType(v ?? "")}
              required
            >
              <SelectTrigger
                id={`${idPrefix}-eventType`}
                className={selectTriggerClassName}
                aria-required="true"
              >
                <SelectValue placeholder="בחרו סוג אירוע" />
              </SelectTrigger>
              <SelectContent className="z-[60] border border-white/10 bg-background text-foreground shadow-xl ring-1 ring-white/10">
                {EVENT_TYPES.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor={`${idPrefix}-eventDate`} className={labelClassName}>
              תאריך האירוע
            </label>
            <input
              type="hidden"
              id={`${idPrefix}-eventDate`}
              name="eventDate"
              value={eventDate ? format(eventDate, "dd/MM/yyyy") : ""}
            />
            <Popover>
              <PopoverTrigger
                type="button"
                className={cn(
                  inputClassName,
                  "flex items-center justify-between gap-3",
                )}
                aria-label="בחרו תאריך אירוע"
              >
                <span
                  className={cn(
                    "min-w-0 flex-1 truncate text-start",
                    !eventDate && "text-muted-foreground/70",
                  )}
                  dir="ltr"
                >
                  {eventDate ? format(eventDate, "dd/MM/yyyy") : "DD/MM/YYYY"}
                </span>
                <CalendarIcon
                  className="size-5 shrink-0 text-muted-foreground"
                  aria-hidden
                />
              </PopoverTrigger>
              <PopoverContent
                dir="rtl"
                className="z-[60] w-auto border border-white/10 bg-[#09090b] p-0 text-white shadow-xl ring-1 ring-white/10"
                sideOffset={8}
              >
                <Calendar
                  mode="single"
                  selected={eventDate}
                  onSelect={setEventDate}
                  disabled={(date) =>
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                  }
                  captionLayout={"dropdown-buttons" as "dropdown"}
                  fromYear={new Date().getFullYear()}
                  toYear={new Date().getFullYear() + 4}
                  locale={he}
                  weekStartsOn={0}
                  className="bg-[#09090b]"
                />
              </PopoverContent>
            </Popover>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "mt-1 w-full rounded-full py-3.5 text-base font-bold text-white shadow-lg",
              "bg-gradient-to-l from-blue-700 to-blue-500",
              "shadow-[0_0_32px_rgba(59,130,246,0.22)] ring-1 ring-white/15",
              "transition-[filter] hover:brightness-110",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/40",
            )}
          >
            בדקו זמינות עכשיו
          </motion.button>
        </form>
      )}
    </div>
  );
}

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { locationEntries, services } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const PHONE_DISPLAY = "050-1234567";
const PHONE_TEL = "+972501234567";
const EMAIL = "omer@example.com";
const WHATSAPP_URL = "https://wa.me/972501234567";
const INSTAGRAM_URL = "https://www.instagram.com/omermizrahi/";
const FACEBOOK_URL = "https://www.facebook.com/";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const quickLinks = [
  { href: "/#hero", label: "ראשי" },
  { href: "/#about", label: "עלי" },
  { href: "/services/wedding", label: "שירותים" },
  { href: "/#gallery", label: "גלריה" },
  { href: "/#testimonials", label: "המלצות" },
] as const;

const socialLinks = [
  {
    href: INSTAGRAM_URL,
    label: "Instagram",
    icon: InstagramIcon,
    external: true,
  },
  {
    href: WHATSAPP_URL,
    label: "WhatsApp",
    icon: WhatsAppIcon,
    external: true,
  },
  {
    href: FACEBOOK_URL,
    label: "Facebook",
    icon: FacebookIcon,
    external: true,
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* עמודה 1 — מיתוג */}
          <div className="text-start">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-foreground">
              OMER MIZRAHI
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              מוזיקה, רגש ואנרגיה ללא פשרות. הופכים כל אירוע לחוויה של פעם בחיים.
            </p>
          </div>

          {/* עמודה 2 — קישורים מהירים */}
          <div className="text-start">
            <h3 className="text-sm font-semibold text-foreground">ניווט</h3>
            <nav aria-label="קישורים מהירים" className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground transition-colors hover:text-neon-purple"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <p className="mt-6 text-xs font-semibold text-foreground">סוגי אירועים</p>
            <nav
              aria-label="דפי שירותים"
              className="mt-2 flex flex-col gap-1.5"
            >
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="text-xs text-muted-foreground transition-colors hover:text-neon-purple"
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* עמודה 3 — רשתות */}
          <div className="text-start">
            <h3 className="text-sm font-semibold text-foreground">עקבו אחרינו</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {socialLinks.map(({ href, label, icon: Icon, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={cn(
                      "inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors",
                      "hover:text-neon-purple"
                    )}
                  >
                    <Icon className="size-5 shrink-0" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* עמודה 4 — יצירת קשר */}
          <div className="text-start">
            <h3 className="text-sm font-semibold text-foreground">יצירת קשר</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-neon-purple"
                >
                  <Phone className="size-5 shrink-0" aria-hidden />
                  <span dir="ltr">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-neon-purple"
                >
                  <Mail className="size-5 shrink-0" aria-hidden />
                  <span dir="ltr">{EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* אזורי שירות — SEO */}
        <div className="mt-12 border-t border-white/10 pt-10">
          <h2 className="text-sm font-semibold text-foreground">אזורי שירות</h2>
          <nav
            aria-label="אזורי שירות — דפי נחיתה מקומיים"
            className="mt-4 text-start text-xs leading-relaxed text-gray-500"
          >
            {locationEntries.map(({ name, slug }, i) => (
              <span key={slug}>
                {i > 0 && (
                  <span className="mx-1.5 text-white/25" aria-hidden>
                    |
                  </span>
                )}
                <Link
                  href={`/locations/${slug}`}
                  className="transition-colors hover:text-purple-400"
                >
                  דיג&apos;יי ב{name}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-center text-xs text-muted-foreground sm:text-start">
            © {year} Omer Mizrahi. All rights reserved.
          </p>
          <p className="text-center text-[11px] text-muted-foreground/70 sm:text-end">
            Built with Cursor
          </p>
        </div>
      </div>
    </footer>
  );
}

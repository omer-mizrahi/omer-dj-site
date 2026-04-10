import Link from "next/link";

const footerLinks = [
  { href: "#hero", label: "ראשי" },
  { href: "#about", label: "עלי" },
  { href: "#gallery", label: "גלריה" },
  { href: "#packages", label: "חבילות" },
  { href: "#contact", label: "צור קשר" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-surface/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-bold text-foreground">Omer Mizrahi</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            DJ ומפיק מוזיקלי לאירועים — חוויה קולית פרימיום.
          </p>
        </div>
        <nav aria-label="קישורי תחתית" className="flex flex-wrap gap-x-4 gap-y-2">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-muted transition-colors hover:text-turquoise"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Omer Mizrahi. כל הזכויות שמורות.
      </div>
    </footer>
  );
}

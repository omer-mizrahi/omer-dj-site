"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#hero", label: "ראשי" },
  { href: "#about", label: "עלי" },
  { href: "#gallery", label: "גלריה" },
  { href: "#packages", label: "חבילות" },
  { href: "#contact", label: "צור קשר" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-white/10 bg-background/55 shadow-lg shadow-black/20 backdrop-blur-xl backdrop-saturate-150"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-neon-purple"
        >
          Omer Mizrahi
        </Link>

        <nav
          aria-label="ניווט ראשי"
          className="hidden items-center gap-1 md:flex md:flex-1 md:justify-center"
        >
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="#lead-form"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-l from-neon-purple to-electric-blue px-4 py-2 text-sm font-semibold text-white shadow-md shadow-neon-purple/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-blue"
          >
            בדוק זמינות
          </Link>
        </div>
      </div>

      <nav
        aria-label="ניווט מובייל"
        className="flex flex-wrap items-center justify-center gap-1 border-t border-white/5 px-2 py-2 md:hidden"
      >
        {navItems.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { cn } from "@/lib/utils";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omer Mizrahi | DJ לאירועים",
  description: "פורטפוליו והזמנות — Omer Mizrahi, DJ ומפיק מוזיקלי.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      suppressHydrationWarning
      className={cn(
        "dark",
        "h-full scroll-smooth antialiased",
        rubik.variable,
        "font-sans"
      )}
    >
      <body
        className="flex min-h-full flex-col bg-background font-sans text-foreground"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

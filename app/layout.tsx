import type { Metadata } from "next";
import { Rubik, Geist } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
      className={cn("h-full", "scroll-smooth", "antialiased", rubik.variable, "font-sans", geist.variable)}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

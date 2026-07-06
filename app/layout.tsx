import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { cn } from "@/lib/utils";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

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
        "overflow-x-hidden max-w-[100vw]",
        rubik.variable,
        "font-sans"
      )}
    >
      <body
        className="flex min-h-full max-w-[100vw] flex-col overflow-x-hidden bg-background font-sans text-foreground"
        suppressHydrationWarning
      >
        <Navbar />
        <div className="flex w-full min-w-0 flex-1 flex-col overflow-x-hidden">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
      <GoogleAnalytics gaId="G-6EDM129MKS" />
    </html>
  );
}

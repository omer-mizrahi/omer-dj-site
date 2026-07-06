export function trackWhatsAppClick() {
  if (typeof window !== "undefined") {
    // שימוש ב-any כדי לעקוף את הבדיקה המחמירה של TypeScript
    const gtag = (window as any).gtag;
    
    if (typeof gtag === "function") {
      gtag("event", "conversion", {
        send_to: "AW-18302900252/In9WCLH93cscEJywwJdE",
      });
    }
  }
}
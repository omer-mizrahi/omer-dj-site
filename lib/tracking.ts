export function trackWhatsAppClick() {
  if (typeof window !== "undefined" && (window as Window & { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as Window & { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      "conversion",
      {
        send_to: "AW-18302900252/In9WCLH93cscEJywwJdE",
      },
    );
  }
}

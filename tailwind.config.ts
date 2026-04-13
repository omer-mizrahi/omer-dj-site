import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      backgroundImage: {
        "blue-glow": "linear-gradient(to left, #2563eb, #0b1f4a)",
      },
      colors: {
        background: "#050505",
        foreground: "#fafafa",
        muted: "#9ca3af",
        "neon-purple": "#2563eb",
        "neon-purple-dim": "#1d4ed8",
        "electric-blue": "#0b1f4a",
        "electric-blue-dim": "#071633",
        turquoise: "#60a5fa",
        "turquoise-dim": "#3b82f6",
        surface: "#18181b",
        "surface-elevated": "#27272a",
      },
      fontFamily: {
        sans: ["var(--font-rubik)", "system-ui", "sans-serif"],
      },
    },
  },
} satisfies Config;

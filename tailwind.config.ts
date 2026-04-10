import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#fafafa",
        muted: "#a1a1aa",
        "neon-purple": "#c026fc",
        "neon-purple-dim": "#8617b8",
        "electric-blue": "#2f6bff",
        "electric-blue-dim": "#1d4ed8",
        turquoise: "#2dd4bf",
        "turquoise-dim": "#14b8a6",
        surface: "#18181b",
        "surface-elevated": "#27272a",
      },
      fontFamily: {
        sans: ["var(--font-rubik)", "system-ui", "sans-serif"],
      },
    },
  },
} satisfies Config;

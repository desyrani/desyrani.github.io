import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1200px",
      xl: "1400px",
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        "text-dim": "var(--text-dim)",
        "text-faint": "var(--text-faint)",
        "accent-violet": "var(--accent-violet)",
        "accent-violet-strong": "var(--accent-violet-strong)",
        "accent-cyan": "var(--accent-cyan)",
        "accent-cyan-strong": "var(--accent-cyan-strong)",
        "accent-orange": "var(--accent-orange)",
        "accent-green": "var(--accent-green)",
        "status-green": "var(--status-green)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #8b5cf6, #06b6d4)",
      },
    },
  },
  plugins: [],
} satisfies Config;

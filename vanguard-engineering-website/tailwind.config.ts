import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        charcoal: "#1E293B",
        bone: "#FAFAF7",
        paper: "#FFFFFF",
        signal: "#B91C1C",
        gold: "#B45309",
        mist: "#F1F5F9",
        border: "#E2E8F0",
        muted: "#475569",
        success: "#065F46",
        warning: "#B45309",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      maxWidth: {
        "7xl": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

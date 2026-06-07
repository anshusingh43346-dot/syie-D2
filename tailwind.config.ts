import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#111111",
        gold: "#D4AF37",
        ivory: "#FFF8E7",
        purple: "#7C5CFF",
        slate: "#64748B",
      },
      fontFamily: {
        heading: ["var(--font-playfair-display)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;

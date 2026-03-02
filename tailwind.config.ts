import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        pp: {
          base: "#0B0F1A",
          alt: "#111827",
          dark: "#1F2937",
          text: "#F9FAFB",
          muted: "#D1D5DB",
          primary: "#8B5CF6",
          hover: "#A78BFA",
          active: "#6D28D9"
        }
      }
    }
  },
  plugins: []
};

export default config;

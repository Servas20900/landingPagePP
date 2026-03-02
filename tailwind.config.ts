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
          primary: "#9F1239",
          hover: "#BE123C",
          active: "#881337"
        }
      }
    }
  },
  plugins: []
};

export default config;

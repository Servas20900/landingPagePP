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
          base: "#2D0101",
          alt: "#540000",
          dark: "#1A0000",
          primary: "#730202",
          hover: "#590202"
        }
      }
    }
  },
  plugins: []
};

export default config;

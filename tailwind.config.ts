import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        backgroundFirst: {
          "0%": { transform: "translate(30vw,0)" },
          "50%": { transform: "translate(60vw,0)" },
          "100%": { transform: "translate(30vw,0)" },
        },
        backgroundSecond: {
          "0%": { transform: "translate(5vw, 10vh)" },
          "25%": { transform: "translate(30vw, 20vh)" },
          "50%": { transform: "translate(50vw, 30vh)" },
          "75%": { transform: "translate(30vw, 20vh)" },
          "100%": { transform: "translate(5vw, 10vh)" },
        },
        backgroundThird: {
          "0%": { transform: "translate(0vw,0)" },
          "50%": { transform: "translate(50vw,0)" },
          "100%": { transform: "translate(0vw,0)" },
        },
      },
      animation: {
        backgroundFirst: "backgroundFirst 20s ease-in-out infinite",
        backgroundSecond: "backgroundSecond 40s ease-in infinite",
        backgroundThird: "backgroundThird 80s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

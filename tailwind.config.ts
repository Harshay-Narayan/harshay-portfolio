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
          "50%": { transform: "translate(70vw,0)" },
          "100%": { transform: "translate(30vw,0)" },
        },
        backgroundSecond: {
          "0%": { transform: "translate(10vw,15vh)" },
          "250%": { transform: "translate(30vw,40vh)" },
          "50%": { transform: "translate(50vw,50vh)" },
          "75%": { transform: "translate(70vw,40vh)" },
          "100%": { transform: "translate(10vw,15vh)" },
        },
        backgroundThird: {
          "0%": { transform: "translate(40vw,0)" },
          "50%": { transform: "translate(84vw,0)" },
          "100%": { transform: "translate(40vw,0)" },
        },
      },
      animation: {
        backgroundFirst: "backgroundFirst 30s ease-in-out infinite",
        backgroundSecond: "backgroundSecond 40s ease-in infinite",
        backgroundThird: "backgroundThird 40s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

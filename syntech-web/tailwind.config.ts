import type { Config } from "tailwindcss";
import { Inter } from "next/font/google";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-background": "url(/hero-background.png)",
        "section-home": "url(/banner-section.png)",
      },
      colors: {
        'logo-blue': '#4A5D5E',
        'primary-light': '#D2DBC8',
        'background-light': '#FBFFF8',
      },

    },
  },
  plugins: [],
};
export default config;

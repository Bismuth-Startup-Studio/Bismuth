import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        "app-padding": "var(--app-padding)",
      },
      colors: {
        "primary-red": "var(--primary-red)",
        "light-black": "var(--light-black)",
        "dark-black": "var(--dark-black)",
        "secondary-red": "var(--secondary-red)",
        "light-red": "var(--light-red)"
      },
      fontFamily: {
        "news-reader": "newsreader"
      }
    },
  },
  plugins: [],
};
export default config;

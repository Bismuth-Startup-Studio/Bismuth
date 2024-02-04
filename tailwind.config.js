/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx.html}"],
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
} 
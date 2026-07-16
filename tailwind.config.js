/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold:  { DEFAULT: "#D4A853", light: "#F5D780", dark: "#C9883E" },
        rose:  { DEFAULT: "#E8A4A4", dark: "#C47A7A" },
        cream: "#F5EDDC",
        ink:   "#080610",
      },
      fontFamily: {
        serif:  ["Playfair Display", "Georgia", "serif"],
        script: ["Dancing Script", "cursive"],
        sans:   ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

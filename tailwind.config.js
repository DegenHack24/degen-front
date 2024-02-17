/** @type {import('tailwindcss').Config} */
import colors from "./src/styles/colorsPalette";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};

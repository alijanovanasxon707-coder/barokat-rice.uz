/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          600: "#D97706",
          700: "#B45309",
        },
        leaf: {
          50: "#F0FDF4",
          100: "#DCFCE7",
          600: "#16A34A",
          700: "#15803D",
          800: "#166534",
        },
        charcoal: "#1C1917",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

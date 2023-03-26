/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['"Quicksand"', 'sans-serif'],
        'bebas': ['"Bebas Neue"', 'cursive'],
      },
      backgroundImage: {
        'lofi': "url('/src/assets/lofi.gif')",
      }
    },
  },
  plugins: [],
}

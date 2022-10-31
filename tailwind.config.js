/** @type {import('tailwindcss').Config} */

module.exports = {
  // purge: [],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // darkMode: false, // or 'media' or 'class'/
  theme: {
    extend: {},
    fontFamily: {
      'aso': ['Alfa Slab One', 'cursive'],
      'shadow': ['Shadows Into Light Two', 'cursive'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

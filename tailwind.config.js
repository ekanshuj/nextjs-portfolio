/** @type {import('tailwindcss').Config} */

module.exports = {
  // purge: [],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      'aso': ['Alfa Slab One', 'cursive'],
      'shadow': ['Shadows Into Light Two', 'cursive'],
      'han': ['Black Han Sans', 'sans-serif'],
      'bubblegum': ['Bubblegum Sans', 'cursive'],
      'averia': ['Averia Sans Libre', 'cursive']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

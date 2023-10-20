/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    extend: {
      transitionProperty: {
        'width': 'width',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
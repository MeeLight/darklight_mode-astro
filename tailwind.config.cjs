/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: "'Work Sans', sans-serif"
      },
      colors: {
        'dub-dark-bg': '#1c1f27'
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': { 'min': '0px', 'max': '480px' },    // Правильный формат для max-width
        'tablet': { 'min': '481px', 'max': '1024px' },
        'desktop': { 'min': '1025px' }
      }
    },
  },
  plugins: [],
}


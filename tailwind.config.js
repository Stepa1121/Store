/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': { 'max': '480px' },    // Правильный формат для max-width
        'tabletV': { 'min': '481px', 'max': '768px' },
        'tabletH': { 'min': '769px', 'max': '1024px' },
        'desktop': { 'min': '1025px' }
      }
    },
  },
  plugins: [],
}


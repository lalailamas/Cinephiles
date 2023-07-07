/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-red': '#D84C3E',
        'custom-light-yellow': '#E1B867'
      }
    },
  },
  plugins: [],
}
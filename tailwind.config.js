/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx,html}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sour Gummy', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
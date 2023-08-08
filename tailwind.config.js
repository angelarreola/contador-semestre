/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'the-egg': "url('/img/background.jpg')"
      },
      fontFamily: {
        'hanken': "'Hanken Grotesk', sans-serif;"
      }
    },
  },
  plugins: [],
}
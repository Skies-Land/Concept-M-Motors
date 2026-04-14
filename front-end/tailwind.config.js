/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EAB308', // Radiant Yellow/Orange accent
          dark: '#CA8A04',
        },
        background: '#0F172A', // Deep Sleek Dark Blue/Black
      },
    },
  },
  plugins: [],
}

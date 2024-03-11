/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'unisbank' : {
          300 : "#9a1e4d",
          400 : "#8f0539",
          500 : '#8F0539',
          600 : '#810533'
        }
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hind: ['"Hind Madurai"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

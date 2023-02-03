/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{html,jsx,js}",
    './components/**/*.{html,jsx,js}',
    './pages/**/*.{html,jsx,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

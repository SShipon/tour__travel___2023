/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    './pages/**/*.{html,jsx,js}',
    './components/**/*.{html,jsx,js}',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

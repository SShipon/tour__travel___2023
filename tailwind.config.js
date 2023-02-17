/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./src/**/*.{html,jsx,js,ts, tsx}",
  
  ],
  theme: {
    extend: {
      backgroundSize: {
        "size-180": "180% 180%",
      },
    },
    
  },
  plugins: [require("daisyui")],
}

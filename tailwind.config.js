/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F33823'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}

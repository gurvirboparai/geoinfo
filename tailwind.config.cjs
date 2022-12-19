/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'sp': '0px 0px 51px 5px #7D9DBD',
      }
    },
  },
  plugins: [],
}
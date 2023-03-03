/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        '110%': '110%',
        '180%': '180%',
      },
      fontSize: {
        '8px': '8px',
      },
    },
  },
  plugins: [],
}




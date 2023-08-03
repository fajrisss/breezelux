/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rush': ['Russo One', 'sans-serif']
      },
      backgroundImage: {
        'breez-lux': "url('src/assets/BREEZLUX.png')",
      },
    },
  },
  plugins: [],
}


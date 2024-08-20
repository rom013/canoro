/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "blue-canoro": "#0D7CE9",
        "blue-canoro-secundary": "#15CFF1"
      },
      fontFamily: {
        "lato": "'Lato', sans-serif",
        "sora": "'Sora', sans-serif",
        "barlow": "'Barlow Condensed', sans-serif",
      },
      backgroundImage: {
        "amazon": "linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0.3)), url(/amazon.png)"
      }
    },
  },
  plugins: [],
}


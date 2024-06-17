/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "blue-canoro": "#0D7CE9"
      },
      fontFamily: {
        "lato": "'Lato', sans-serif",
        "sora": "'Sora', sans-serif"
      }
    },
  },
  plugins: [],
}


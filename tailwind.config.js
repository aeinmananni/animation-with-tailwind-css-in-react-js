/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      rotate:{
        "x-0":"0",
        "x-90":"rotateX(90deg)",
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction:{
         myEases : 'cubic-bezier(0.215, 0.610, 0.355, 1)'
      }
    },
  },
  plugins: [],
}


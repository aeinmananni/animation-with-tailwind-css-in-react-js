import { transform } from 'typescript'

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
      },
      animation:{
        move:"move 1s linear infinite alternate"
      },
      keyframes:{
         move:{
             from:{transform:"translateX(0)"},
             to:{transform:"translateX(54px)"}
         }
      }
    },
  },
  plugins: [],
}


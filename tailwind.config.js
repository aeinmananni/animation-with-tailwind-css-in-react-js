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
        move1:"move1 2s linear infinite alternate",
        move2:"move2 2s ease-in-out infinite"
      },
      keyframes:{
         move1:{
             from:{transform:"translateX(0)"},
             to:{transform:"translateX(1000px)"}
         },
         move2:{
             "0%":{transform:"translateX(0)"},
             "100%":{transform:"translateX(1000px)"}
         }
      }
    },
  },
  plugins: [],
}


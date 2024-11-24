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
        move2:"move2 2s ease-in-out infinite",
        move3:"move3 3s ease-in-out infinite both"
      },
      keyframes:{
         move1:{
             from:{transform:"translateX(0)"},
             to:{transform:"translateX(1000px)"}
         },
         move2:{
             "0%":{transform:"translateX(0)"},
             "100%":{transform:"translateX(1000px)"}
         },
         move3:{
              "0%":{transform:"translateX(0)"},
              "25%":{transform:"translateX(1200px)"},
              "50%":{transform:"translate(1200px,500px)"},
              "75%":{transform:"translate(0,500px)"},
              "100%":{transform:"translate(0,0)"},
         }
      }
    },
  },
  plugins: [],
}


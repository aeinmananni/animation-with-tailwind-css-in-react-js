import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'custom': '14px 24px 10px rgba(5, 0, 1, 0.7)',
      },
      rotate:{
        "x-0":"0",
        "x-90":"rotateX(90deg)",
      },
      animation:{
        move1:"move1 2s linear infinite alternate",
        move2:"move2 2s ease-in-out infinite",
        move3:"move3 3s ease-in-out infinite both",
        textAnimation:"textAnimation 3s linear infinite alternate"
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
         },
         textAnimation:{
           "0%":{transform:"rotate(-12deg)"},
           "100%":{transform:"rotate(12deg)"},
         }
      }
    },
  },
  plugins: [
    require("tailwindcss-textshadow")
  ],
}


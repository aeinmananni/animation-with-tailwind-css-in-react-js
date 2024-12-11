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
        textAnimation:"textAnimation 3s linear infinite alternate",
        rotation:"rotation 3s linear infinite alternate",
        shaking:"shaking .2s linear infinite alternate",
        skewMode:"skewMode 1s linear infinite ",
        lighMode:"lighMode 1s ease-in-out  infinite alternate",
        heart:"heart .5s  infinite both"
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
           "0%":{transform:"rotate(0deg)"},
           "50%":{transform:"rotate(-4deg)"},
           "100%":{transform:"rotate(4deg)"},
         },
         rotation:{
            "0%":{transform:"rotateX(0) rotateY(0)"},
            "50%":{transform:"rotateX(0) rotateY(180deg)"},
            "100%":{transform:"rotateX(180deg) rotateY(180deg)"},
         },

         shaking:{
                   "30%":{transform:"rotate(3deg)"},
                   "60%":{transform:"rotate(-3deg)"},
                   "100%":{transform:"rotate(3deg)"}
         },
         skewMode:{
            "0%":{left:"-120px"},
            "100%":{left:"100%"}
         },
         lighMode: {
          "0%": { color: "#b4cfc5",  },
          "100%": { color: "#bcd11d",  },
        },
        heart:{
             "0%":{transform:"scale(1)"},
             "25%":{transform:"scale(1)"},
             "30%":{transform:"scale(1.4)"},
             "50%":{transform:"scale(1.2)"},
             "70%":{transform:"scale(1.4)"},
             "100%":{transform:"scale(1)"},
        }
        
      }
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    function ({ addUtilities }) {
      addUtilities({
        '.perspective': {
          perspective: '500px',
        },
      });
    },
  ],
}


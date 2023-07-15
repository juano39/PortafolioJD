/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flotin: {
          "0%, 100%": { transform: "translateY(-2%)" },

          "50% ": { transform: "translateY(-0%)" },
        },
        topLine: {
          "50%, 100%": {
            margin: "0 auto",
            transform: "translateY(2px) rotate(-45deg)",
          },
        },
        topLineCancel: {
          "0%": {
            margin: "0 auto",
            transform: "translateY(2px) rotate(-45deg)",
          },
          "50%, 100%": {
            margin: "5px auto",
            transform: "translateY(0px) rotate(0deg)",
          },
        },
        bottomLine: {
          "50%, 100%": {
            margin: "0 auto",
            transform: "translateY(-13px) rotate(45deg)",
          },
        },
        bottomLineCancel: {
          "0%": {
            margin: "0 auto",
            transform: "translateY(2px) rotate(-45deg)",
          },
          "50%, 100%": {
            margin: "5px auto",
            transform: "translateY(0px) rotate(0deg)",
          },
        },
        middleLine: {
          "20%, 100%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
        },
        middleLineCancel: {
          "0%": {
            margin: "0 auto",
            transform: "translateX(100%)",
            opacity: 0,
          },
          "20%, 100%": {
            margin: "5px auto",
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        navbar: {
          "20%, 100%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
        },
        navbarCancel: {
          "0%": {
            margin: "0 auto",
            transform: "translateX(100%)",
            opacity: 0,
          },
          "20%, 100%": {
            
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        flotin: "flotin 4s ease-in-out infinite",
        topLine: "topLine 1s ease-in-out forwards",
        topLineCancel: "topLineCancel 1s ease-in-out forwards",
        bottomLine: "bottomLine 1s ease-in-out forwards",
        bottomLineCancel: "bottomLineCancel 1s ease-in-out forwards",
        middleLine: "middleLine 2s ease-in-out forwards",
        navbar: "navbar 2s ease-in-out forwards",
        navbarCancel: "navbarCancel 2s ease-in-out forwards",
        middleLineCancel: "middleLineCancel 2s ease-in-out forwards",
      },
      backgroundImage: {
        fondo: "url('fondo1.png')",
        about: "url('fondoabout.png')",
      },
    },
  },
  plugins: [],
};

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
      },
      animation: {
        flotin: 'flotin 4s ease-in-out infinite'
      },
      backgroundImage: {
        'fondo': "url('fondo1.png')",
        'about': "url('fondoabout.png')",
        
      },
      
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme:{
    extend:{
       backgroundImage: {
        red_gradient : 'linear-gradient(to right, #e10000, #430000)',
      },
      colors:{
        primary: "#D2042D",
        secondary: '#FF6B6B',
        dark: '#1A1A2E',
        light: '#F7F7F7',
        steel: '#3E4E5E',
        grayish: '#A0A0A0',
        start:"#B3001B",
        middle:"#D11A2A",
        end:"#FF4D4D",

      },
      
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px,1fr))'

      }

    },

  },
  plugins: [],
}
   


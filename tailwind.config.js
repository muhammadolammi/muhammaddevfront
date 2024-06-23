/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add your custom font family
      },

      container:{
        center: true,
        padding : '2rem',
        margin: '100px'
      }
    },
  },
  plugins: [],
}


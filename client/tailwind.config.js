/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1100': '1100px'
      },
      backgroundColor: {
        primary: '#F5F5F5',
        secondary1: '#C80615',
        secondary2: 'f73859'
      },
      maxWidth:{
        '600' : '600px'
      },
      theme:{
        container:{
          center: true,
        }
      }
      
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
          "dark-purple": "#081A51",
          'light-white': 'rgba(250,250,250,0.18)'
      },
      width: {
        '1100': '1100px'
      },
      backgroundColor: {
        primary: '#F5F5F5',
        secondary1: '1266dd',
        secondary2: 'f73859'
      }
    },
  },
  plugins: [],
}


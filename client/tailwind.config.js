/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html"
  ],
  theme: {
    extend: {
      width:{
        '1100' : '1100px'
      },
      backgroundColor: {
        primary: '#f5f5f5',
        secondary1: '#f1266dd',
        secondary2: '#f73859'
      }
    },
  },
  plugins: [],
}


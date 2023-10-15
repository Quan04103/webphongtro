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
        secondary1: '1266dd',
        secondary2: 'f73859'
      }
    },
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        //block lien he
        gray: {
          "100": "#fdfffe",
          "200": "#949494",
          "300": "#090909",
          "400": "rgba(0, 0, 0, 0.04)",
          "500": "rgba(0, 0, 0, 0.7)",
          "600": "rgba(0, 0, 0, 0.5)",
        },
        mediumseagreen: "#16c784",
        whitesmoke: "#f4f4f4",
        dimgray: "#6a6a6a",
        lightgray: "rgba(203, 203, 203, 0.3)",
        darkslategray: "rgba(58, 49, 49, 0.3)",
        royalblue: "#1266dd",
      },
      //from
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "segoe-ui-variable": "'Segoe UI Variable'",
      },
      borderRadius: {
        "3xs": "10px", "8xs": "5px", "6xl": "25px",
        mini: "15px",
        smi: "13px",
      },
    },
    //size tong the
    fontSize: {
      smi: "13px",
      "2xl": "21px",
      "5xl": "24px",
      sm: "14px",
      base: "16px",
      xl: "20px",
      "13xl": "32px",
      "3xl": "22px",
      "7xs": "6px",
      mini: "15px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  plugins: [],
}
//.........Huy......//

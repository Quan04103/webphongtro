/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '999': '999',
      },
      colors: {
        "dark-purple": "#081A51",
        'light-white': 'rgba(250,250,250,0.18)',
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
      width: {
        '1100': '1100px'
      },
      backgroundColor: {
        primary: '#F5F5F5',
        secondary1: '1266dd',
        secondary2: 'f73859',
        'overlay-30': 'rgba(0,0,0,0.3)',
        'overlay-70': 'rgba(0,0,0,0.7)',

      },
      margin: {
        '200px': '200px',
      },
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
    color: {
      gray: "#d1d5db",
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
});


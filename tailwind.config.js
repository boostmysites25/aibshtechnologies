/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffd63c",
        // primary: "#FEFF05",
        // primary1: "#DFDE02",
        primary1: "#ffd63c",
        // primary1: "#FCD743",
        primary2: "#ffd63c",
      },
      boxShadow: {
        large: "0px 0px 30px 10px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        atkinson: ["Atkinson Hyperlegible", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

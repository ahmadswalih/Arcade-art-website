/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["MONSETA", "sans-serif"],
        paulThin: ["PaulThin", "sans-serif"],
        paulRegular: ["PaulRegular", "sans-serif"],
        paulBold: ["PaulBold", "sans-serif"],
      },
      colors: {
        gold: "#ffd586",
        grad: "#2f2a1f",
        blc: "#131312",
        black2: "#111111",
        brown: "#1b1b1b",
      },
    },
  },
  plugins: [],
};

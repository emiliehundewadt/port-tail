/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        custom_pink: "#ff1177",
      },
      fontFamily: {
        overskrift: ["Bebas Neue", "cursive"],
        underoverskrift: ["Big Shoulders Display", "cursive"],
        brød: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("daisyui"), require("flowbite/plugin")],
};

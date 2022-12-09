/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#212121",
          "secondary": "#cacaca",
          "accent": "#f7bdb9",
          "neutral": "#191424",
          "base-100": "#EEF2FE",
          "info": "#8a8a8a",
          "success": "#168D65",
          "warning": "#CE8003",
          "error": "#F86885",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

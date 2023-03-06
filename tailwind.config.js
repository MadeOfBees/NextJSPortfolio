/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        bee: {
          "primary": "#ea999c",
          "secondary": "#8caaee",
          "accent": "#a6d189",
          "neutral": "#414558",
          "base-100": "#313445",
          "info": "#8BE9FD",
          "success": "#50FA7B",
          "warning": "#fde047",
          "error": "#FF5555",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
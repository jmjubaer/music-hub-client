/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['Geologica', "sans-serif"],
      'logo': ['Chokokutai', 'cursive'],
    },
    extend: {
      colors: {
        'main': '#ff9aa6',
        'black' : '#000',
        'secondery': '#D6BBC2',
        'white': '#fff'
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark",],
  },
}
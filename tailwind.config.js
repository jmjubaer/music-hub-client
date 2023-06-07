/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': '#ff9aa6',
      'second ': '##D6BBC2'
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'serif': ['Geologica', "sans-serif"],
      'logo': ['Chokokutai', 'cursive'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark",],
  },
}
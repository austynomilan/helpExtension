/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-100': '#B6B3C6',
        'primary-200': '#928FAB',
        'primary-300': '#120B48',
        'primary-400': '#413C6D',
        'primary-600': '#100A42'
      },
      fontFamily:{
        def: "Work Sans",
        sora: "Sora",
        inter: "inter",
        manrope: "Manrope"
      },
    },
  },
  plugins: [],
}


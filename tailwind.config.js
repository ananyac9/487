/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'backdrop': 'ffffff'
    },
    fontFamily: {
      'EBGaramond': ['EB Garamond', 'serif'],
      'specialelite': ['Special Elite', 'cursive'],
    },
    flexBasis:{
      '22': '22%',
      '1/2': '50%',
    },
    extend: {},
  },
  plugins: [],
}


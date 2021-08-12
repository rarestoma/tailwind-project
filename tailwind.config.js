const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        6: '6px'
      },
      colors: {
        'blue': colors.blue,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
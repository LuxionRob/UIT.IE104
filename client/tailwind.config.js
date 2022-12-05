/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
<<<<<<< Updated upstream
  content: ['./src/**/*.{html,js,jsx}', './public/*.html', './src/*.{jsx, js}'],
=======
  content: ['./src/**/*.{html,jsx, js}', './public/*.html', './src/*.{jsx, js}'],
>>>>>>> Stashed changes
  theme: {
    extend: {
      colors: {
        primary: '#4d8b54',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.input': {
          border: 'solid 0.2rem #4d8b54',
        },
      })
    }),
  ],
}

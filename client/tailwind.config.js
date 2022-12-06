/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './public/*.html', './src/*.{jsx, js}'],
  theme: {
    extend: {
      colors: {
        primary: '#4d8b54',
      },
      spacing: {
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.input': {
          border: 'solid 0.1rem #ccc',
          padding: '0.5rem 0.5rem',
          borderRadius: '0.3rem',
          '&:hover': {
            outline: 'solid 0.1rem #4d8b54aa',
            borderRadius: '0.3rem',
          },
          '&:focus-visible': {
            outline: 'solid 0.15rem #4d8b54',
            borderRadius: '0.3rem',
          },
        },
      })
    }),
  ],
}

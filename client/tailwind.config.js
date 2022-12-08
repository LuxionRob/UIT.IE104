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
    plugin(function ({ addBase, addComponents }) {
      addComponents({
        '.input': {
          border: 'solid 0.1rem #ccc',
          padding: '0.5rem 0.5rem',
          '&:hover': {
            outline: 'solid 0.1rem #4d8b54aa',
          },
          '&:focus-visible': {
            outline: 'solid 0.15rem #4d8b54',
          },
        },
      })
      addComponents({
        '.tooltip': {
          position: 'relative',
          '&:before': {
            content: 'attr(data-text)',
            display: 'inline-block',
            position: 'absolute',
            bottom: '50%',
            background: '#000',
            color: '#fff',
            padding: '5px',
            'border-radius': '5px',
            opacity: 0,
            transition: '0.3s',
            overflow: 'hidden',
            'max-width': '100%',
            'pointer-events': 'none',
          },
          '&:hover::before': {
            opacity: 1,
            bottom: '100%',
          },
        },
      })
      addBase({ html: { fontFamily: 'Noto Sans, Roboto, sans' } })
    }),
  ],
}

const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}',
      './layouts/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './views/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      safelist: ['pt-10', 'md:pt-10'],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blueGray: colors.blueGray,
      white: colors.white,
      black: colors.black,
      coolGray: colors.coolGray,
      gray: colors.gray,
      trueGray: colors.trueGray,
      'warm-gray': colors.warmGray,
      teal: colors.teal,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },

    screens: {
      'sm': '540px',
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 768px) { ... }

      'lg': '960px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1280px',
      // => @media
    },
    extend: {

      fontFamily: {
        'monospace': ['RobotoFlex'],
      },

      container: {
        padding: {
          DEFAULT: '1rem',
        }
      },
      colors: {
        'primary': '#e3122a'
      },
      opacity: {
        '4': '0.04',
      },
      width: {
        495: '495px'
      },
      height: {
        380: '380px',
        495: '495px',
        600: '600px',
        'inventory-img': 'calc(100vh - 8rem - 104px)',
      },
      zIndex: {
        '999': 999,
        '1001': 1001
      },

    },
  },
  variants: {
    extend: {
      padding: ['responsive'],
    },
  },
}

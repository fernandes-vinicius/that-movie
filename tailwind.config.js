/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',

      white: '#FFFFFF',
      black: '#000000',

      primary: {
        light: '#EA7273',
        main: '#B1060F',
        dark: '#90050C',
      },

      accent: {
        red: '#EA7273',
        green: '#46d369',
        orange: '#FFA00A',
      },

      gray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },
    },

    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
};

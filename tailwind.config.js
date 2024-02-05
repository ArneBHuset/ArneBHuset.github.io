/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary1: '#FAF9F6',
        primary2: '#36454F',
        secondary1: '#7FB3D5',
        secondary2: '#F2D1D1',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

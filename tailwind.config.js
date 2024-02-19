module.exports = {
  content: ['./src/**/*.{html,js,mjs}', './*.{html,js,mjs}'],
  theme: {
    extend: {
      colors: {
        primary1: '#FAF9F6',
        primary2: '#36454F',
        secondary1: '#00897B',
        secondary2: '#F2D1D1',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Lato', 'sans-serif'],
      },
      // Customizing the container class
      container: {
        center: true, // Centers the container in the viewport
        padding: {
          DEFAULT: '1rem', // Default padding for all breakpoints
          sm: '2rem', // Padding for 'sm' breakpoint and above
          lg: '4rem', // Padding for 'lg' breakpoint and above
          xl: '5rem', // Padding for 'xl' breakpoint and above
          '2xl': '6rem', // Padding for '2xl' breakpoint and above
        },
        screens: {
          sm: '640px', // Custom container max-width for the 'sm' breakpoint
          md: '768px', // Custom container max-width for the 'md' breakpoint
          lg: '1024px', // Custom container max-width for the 'lg' breakpoint
          xl: '1080px', // Custom container max-width for the 'xl' breakpoint
        },
      },
    },
  },
  plugins: [],
};

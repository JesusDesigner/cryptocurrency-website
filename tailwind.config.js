module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Rubik',
    },
    extend: {
      colors: {
        darkblue: {
          DEFAULT: '#0D0D2B',
          secondary: '#252540',
        },
        blue: {
          DEFAULT: '#3671E9',
          hover: '#2766E6',
        },
        violet: '#2B076E',
      },
    },
    screens: {
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      xl: '1200px',
    },
  },
  plugins: [],
};

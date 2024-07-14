const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      letterSpacing: {
        snug: '-0.011em',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      lineHeight: {
        tighter: '1.1', // Changed from 1.1 to '1.1'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

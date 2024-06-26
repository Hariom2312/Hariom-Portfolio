import { transform } from '@babel/core';

/** @type {import('tailwindcss').Config}*/
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1535px",
        xl: "1279px",
        lg: "1023px",
        md: "767px",
        sm: "639px",
      },
      maxWidth: "100%",
    },

    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "836px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      exsm: { max: "380px" },
    },
    extend: {
      colors: {
        "text-yellow-500": "#ffc312",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
         'square': 'square 2.5s linear infinite',
         'square-fast': 'square 0.5s linear infinite',
         'bounce-slow': 'bounceSlow 4s linear infinite',
         'pulse-one': 'pulse 1s linear 1',
      },
      keyframes: {
        square: {
          // '0%': { transform: 'translate-x(-100px) translateY(100px)' },
          // '25%': { transform: 'translate-x(0px) translateY(100px)' },
          // '50%': { transform: 'translate-x(-100px) translateY(100px)' },
          // '75%': { transform: 'translate-x(0px) translateY(100px)' },
          // '100%': { transform: 'translate-x(-100px) translateY(100px)' },
          
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
          },

          bounceSlow: {
            '0%, 100%': { transform: 'translateY(5%)' },
            '50%': { transform: 'translateY(0)' },
          }
      },
    },
  },
  plugins: [],
};

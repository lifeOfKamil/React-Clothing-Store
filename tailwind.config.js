/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1920px) { ... }

      '3xl': '2560px',
      // => @media (min-width: 2560px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

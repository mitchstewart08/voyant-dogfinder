module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '900px',
      // => @media (min-width: 640px) { ... }

      'md': '950px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

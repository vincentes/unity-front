module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.8)',
      },
      colors: {
        primary: {
          DEFAULT: '#232630',
          light: '#242731',
          dark: '#1B1D21',
          intermediate: '#2A2D36',
        },
        detail: '#32353F',
        secondary: '#6C5DD3',
        light: '#CEC7FE',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

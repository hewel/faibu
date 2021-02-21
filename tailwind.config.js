/* eslint-disable @typescript-eslint/no-require-imports */
const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: spacing,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

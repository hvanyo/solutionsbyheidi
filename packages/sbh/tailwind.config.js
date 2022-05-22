import { getPackageTailwindConfig } from '@bodiless/fclasses';

const resolver = (pkgName) => require.resolve(pkgName);
const tailwindcssDir = require('tailwindcss-dir')();

const twConfig = {
  content: [
    './lib/**/!(*.d).{ts,js,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        gray: {
          100: '#FBFBFB',
          200: '#EAEAEA',
          300: '#DFDFDF',
          400: '#999999',
          500: '#7F7F7F',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919',
        },
        brandRed: {
          100: '#e7797d',
          200: '#df4c52',
          300: '#db363c',
          400: '#d72027',
          500: '#c11c23',
          600: '#ac191f',
          700: '#96161b',
          800: '#811317',
          900: '#6b1013',
        },
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.625rem',
        '5xl': '3.25rem',
        '6xl': '5.5rem',
      },
    },
  },

  corePlugins: {},
  plugins: [
    tailwindcssDir,
    require('tw-elements/dist/plugin')
  ],
};

module.exports = getPackageTailwindConfig({
  twConfig,
  resolver,
});

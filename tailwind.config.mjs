import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      westar: {
        50: '#f7f7f5',
        100: '#edece7',
        200: '#e3e1d9',
        300: '#c3bfae',
        400: '#aaa28d',
        500: '#998d76',
        600: '#8c7f6a',
        700: '#756859',
        800: '#61574b',
        900: '#4f473f',
        950: '#2a2520',
      },
      'bermuda-gray': {
        50: '#f2f6f9',
        100: '#dfe9ee',
        200: '#c2d4df',
        300: '#98b6c8',
        400: '#6991ac',
        500: '#4a7290',
        600: '#405e7a',
        700: '#394f65',
        800: '#354455',
        900: '#303b49',
        950: '#1c2530',
      },
      laurel: {
        50: '#f4f6f3',
        100: '#e5eae1',
        200: '#cbd5c5',
        300: '#a6b79e',
        400: '#7c9473',
        500: '#5c7653',
        600: '#455d3e',
        700: '#374a32',
        800: '#2c3c29',
        900: '#253123',
        950: '#141b13',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

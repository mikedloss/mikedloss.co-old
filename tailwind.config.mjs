import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      westar: {
        50: '#f7f7f5',
        100: '#edece7',
        200: '#e3e1d9', // generated from this
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
        400: '#6991ac', // generated from this
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
        400: '#7c9473', // generated from this
        500: '#5c7653',
        600: '#455d3e',
        700: '#374a32',
        800: '#2c3c29',
        900: '#253123',
        950: '#141b13',
      },
      cosmos: {
        50: '#fdf3f4',
        100: '#fbe5e7',
        200: '#fadadd',
        300: '#f3aeb4',
        400: '#ea7f89',
        500: '#dd5663',
        600: '#c93947',
        700: '#a92c38',
        800: '#8c2831',
        900: '#75272e',
        950: '#3f1014',
      },
    },
    extend: {
      animation: {
        fade: 'fadeIn .5s ease-in-out',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      width: {
        'screen-content': 'calc(100vw - 4rem)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'screen-550': { max: '550px' },
        'screen-750': { max: '750px' },
        'screen-900': { max: '900px' },
        'screen-1024': { max: '1024px' },
        'screen-1060': { max: '1024px' },
      },
      colors: {
        primary: {
          DEFAULT: '#b1454a',
        },
        secondary: {
          DEFAULT: '#121212',
        },
        creamson: {
          DEFAULT: '#fff0de',
        },
        black: {
          200: '#020202',
          300: '#333333',
          400: '#1f1e31',
          500: '#555555',
        },
        gray: {
          100: '#888888',
        },
      },
      fontFamily: {
        playfair_display: ['var(--playfair-display)'],
        plus_jakarta_sans: ['var(--plus-jakarta-sans)'],
      },
    },
  },
  plugins: [],
} satisfies Config;

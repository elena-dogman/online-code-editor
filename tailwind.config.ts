import type { Config } from 'tailwindcss';

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#121212',
          a10: '#282828',
          a20: '#3f3f3f',
          a50: '#8b8b8b',
        },
        tonal: {
          a0: '#231d16',
          a10: '#38322b',
        },
        primary: {
          a20: '#e0a257',
          a50: '#f2c99e',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

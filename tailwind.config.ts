import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#3229a2',
          100: '#3129a24b',
          500: '#3129a2a2',
          600: '#3229a2',
          700: '#3129a2ce',
        },
        navy: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          900: '#1F2937',
        },
        health: {
          primary: '#3229a2',
          secondary: '#d929dd',
          dark: '#1F2937',
          light: '#F9FAFB',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

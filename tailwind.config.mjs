/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        tertiary: '#E8B059',
        primary: '#202020',
        white: '#fff',
        secondary: '#656565',
        teal: '#009dae',
        lightTeal: '#F2F8FB',
        purple: '#6658aa',
        lightPurple: '#EFEEFE',
        green: '#509b3c',
        lightGreen: '#E8F5E2',
        grayRace: '#F0F0F0',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        disappear: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      maxWidth: {
        '90vw': '90vw',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeIn2s: 'fadeIn 2s ease-in-out',
        fadeInWithDelay: 'fadeIn 1s ease-in-out 1s', // 1s delay
        disappear: 'disappear 2s forwards',
      },
      lineHeight: {
        'extra-tight': '1.1',
        tight: '1.25',
        normal: '1.5',
        relaxed: '1.75',
        loose: '2',
        'extra-loose': '2.5',
        12: '3rem',
      },
      inset: {
        '-24': '-24px',
        '-60': '-60px',
      },
      borderRadius: {
        '32px': '32px',
      },
      maxWidth: {
        '75ch': '75ch',
      },
    },
  },
  plugins: [],
};

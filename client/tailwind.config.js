/** @type {import('tailwindcss').Config} */
export const content = [
  './src/*.{js,ts,jsx,tsx}',
  './src/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    colors: {
      'ifewa-green': '#2C5E1A',
      'ifewa-gold': '#D4AF37',
      'ifewa-earth': '#8B4513',
    },
    fontFamily: {
      aime: ['AIME'],
      tt_ramillas: ['TT_RAMILLAS']
    },
    backgroundImage: {
      'parallax-pattern': "url('/src/assets/parallax-bg.jpg')",
    },
  },
}
export const plugins = [];

/** @type {import('tailwindcss').Config} */
export const content = [
  './src/*.{js,ts,jsx,tsx}',
  './src/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    colors: {
      'ifewa-green': '#1a2d0c',
      'ifewa-gold': '#D4AF37',
      'ifewa-earth': '#D4AF37',
    },
    fontFamily: {
      aime: ['AIME'],
      'ramillas-regular': ['ramillas-regular'],
      'ramillas-italic': ['ramillas-italic'],
      'inter-cdnfonts': ['INTER-CDNFONTS'],
    },
    backgroundImage: {
      'parallax-pattern': "url('/src/assets/parallax-bg.jpg')",
    },
  },
}
export const plugins = [];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  
  theme: {
    extend: {
      colors: {
        'ifewa-green': '#2C5E1A',
        'ifewa-gold': '#D4AF37',
        'ifewa-earth': '#8B4513',
      },
      backgroundImage: {
        'parallax-pattern': "url('/src/assets/parallax-bg.jpg')",
      },
    },
  },
  plugins: [],
}

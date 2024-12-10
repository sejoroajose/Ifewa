/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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

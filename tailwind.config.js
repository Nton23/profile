/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        regStyle: ['Domine', 'sans-serif'],
        headingName: ['Lilita One', 'serif'],
        bttnStyle: ['Teko', 'monospace'],
      }
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1020px',
      'xl': '1440px',
      '2xl': '2160px',
      '3xl': '2700px'
    }
  },
  plugins: [],
}


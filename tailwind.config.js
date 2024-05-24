/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    colors: {
      'primary': '#5b5b5b',
      'onprimary': '#f2f4f3',
      'secondary': '#c2e812',
      'alert': '#f6511d',
      'notif': '00a6ed'
    },
    extend: {
      fontFamily: {
        'ultralight': ['"San Francisco Display Ultralight"', 'sans-serif'],
        'thin': ['"San Francisco Display Thin"', 'sans-serif'],
        'medium': ['"San Francisco Display Medium"', 'sans-serif'],
        'semibold': ['"San Francisco Display Semibold"', 'sans-serif'],
        'bold': ['"San Francisco Display Bold"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


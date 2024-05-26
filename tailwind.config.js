/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    colors: {
      'primary': '#111',
      'onprimary': '#c3dfe0',
      'secondary': '#c2e812',
      'alert': '#a41623',
      'notif': '#3454d1',
      'black': '#000',
      'white': '#fff'
    },
    extend: {
      fontFamily: {
        'ultralight': ['San Francisco Display Ultralight', 'sans-serif'],
        'thin': ['San Francisco Display Thin', 'sans-serif'],
        'medium': ['San Francisco Display Medium', 'sans-serif'],
        'semibold': ['San Francisco Display Semibold', 'sans-serif'],
        'bold': ['San Francisco Display Bold', 'sans-serif'],
      },
      boxShadow: {
        'custom': '2px 2px 20px rgba(144, 144, 144, 0.61)',
        'inner-custom': '2px 2px 20px rgba(144, 144, 144, 0.61)',
      },
      backgroundImage: {
        'light': "url('./assets/images/bg-top-light.png')",
        'dark': "url('./assets/images/bg-top.jpg')",
      },
      borderRadius: {
        'custom': '30px',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'backdrop': '#121212',
        'primary': '#1ed760',
        'active': '#fff',
        'link': '#b3b3b3',
        'footer': '#181818'
      },
      fontSize: {
        s: '0.813rem'
      },
      boxShadow: {
        spotify: '0 2px 4px 0 rgb(0 0 0 / 20%)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

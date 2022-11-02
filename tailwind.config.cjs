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
        'active': '#282828',
        'link': '#b3b3b3',
        'footer': '#181818'
      }
    },
  },
  plugins: [],
}

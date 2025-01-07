/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' depending on how you want to trigger dark mode
  theme: {
    extend: {
      colors: {
        'dark-bg': '#2D1B8A',
        'dark-text': '#FFFFFF',
        'light-bg': '#f7f7f7',
        'light-text': '#333333',
      },
      fontFamily: {
        // You can include fonts like Google Fonts or any custom font you prefer
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  plugins: [
    require('daisyui'),
  ],
}}


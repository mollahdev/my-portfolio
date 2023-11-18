/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    container: {
      center: true,
      padding: '2.5rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1216px',
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-400': "#fbbf24",
        'primary-500': '#f59e0b',
        'primary-600': '#d97706'
      }
    },
  },
  plugins: [],
}


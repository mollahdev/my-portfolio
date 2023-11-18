/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                sm: '575px',
                md: '768px',
                lg: '991px',
                xl: '1216px',
            },
        },
        fontFamily: {
            primary: ['Inter', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}
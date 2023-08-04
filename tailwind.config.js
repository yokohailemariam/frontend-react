/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm300: '400px',
        sm700: '700px'
      }
    }
  },
  plugins: []
}

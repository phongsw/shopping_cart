/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      lineHeight: {
        1.8: '1.8'
      }
    }
  },
  plugins: []
}

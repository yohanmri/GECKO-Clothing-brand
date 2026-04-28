/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gecko: {
          orange: '#E17F1D',
          black: '#000000',
          white: '#FFFFFF',
          darkgray: '#1A1A1A',
        },
      },
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

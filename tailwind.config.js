/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: 'hsl(0, 0%, 8%)',
      secondary: 'hsl(0, 0%, 41%)',
      white: 'hsl(0, 0%, 100%)',
      'white-100': 'hsl(0, 0%, 98%)',
    },
    fontFamily: {
      epilogue: ['Epilogue', 'sans-serif'],
    },
  },
  plugins: [],
};

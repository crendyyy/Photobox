/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFEDD5',
          DEFAULT: '#F68C54',
          hover: '#FBAC8D',
          dark: '#612505',
        },
        secondary: {
          DEFAULT: '#04223e',
          hover: '#364e65',
        },
      },
      boxShadow: {
        input: '0px 0px 0px 3px #FBE9DF;',
      },
    },
  },
  plugins: [],
}

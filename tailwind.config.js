/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFEDD5',
          DEFAULT: '#F68C54',
          dark: '#612505',
        },
      },
      boxShadow: {
        input: '0px 0px 0px 3px #FBE9DF;',
      },
    },
  },
  plugins: [],
}

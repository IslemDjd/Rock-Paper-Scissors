/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      fontFamily: {
        'outfit': ['outfit', 'sans-serif'],
        'mdMed': ['mdMed', 'sans-serif'],
        'mdReg': ['mdReg', 'sans-serif'],
        'mdSemi': ['mdSemi', 'sans-serif'],
        'mdBold': ['mdBold', 'sans-serif'],
        'BrandFont': ['BrandFont', 'sans-serif'],
        'afacad': ['afacad', 'sans-serif'],
        'kanit': ['kanit', 'sans-serif'],
      },
      backgroundImage: {
        'Background': 'linear-gradient(to bottom, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        'scissors': 'linear-gradient(to right, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'paper': 'linear-gradient(to right, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'rock': 'linear-gradient(to right, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      },
      
    },
  },
  plugins: [],
}


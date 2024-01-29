/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Urbanist'],
      },
      keyframes: {
        'desplazamiento-infinito': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(40%)' },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'animate-scrolling-svg': 'desplazamiento-infinito 5s linear infinite',
        'fade-in-left': 'fade-in-left 1s ease-out'
      }
    },
  },
  plugins: [],
}
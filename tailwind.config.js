/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-lime': '#aaff00',
        'matte-black': '#000000',
        'dark-gray': '#1a1a1a',
        'mid-gray': '#333333',
        'light-gray': '#e0e0e0',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        exo2: ['"Exo 2"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'lime-glow': '0 0 10px rgba(170, 255, 0, 0.5)',
        'text-glow': '0 0 5px rgba(170, 255, 0, 0.8)',
      },
    },
  },
  plugins: [],
}

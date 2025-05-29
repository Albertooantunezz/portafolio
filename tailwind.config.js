
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ['bg-white', 'text-black', 'text-yellow-500'], // Agrega tus clases usadas dinámicamente
  darkMode: 'class', // o 'media', si usas el sistema
  theme: {
    extend: {},
  },
  plugins: [],
}

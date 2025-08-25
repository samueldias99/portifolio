/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff41',
        'dark-bg': '#0a0a0a',
        'card-bg': '#111111',
        'border-color': '#1a1a1a',
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa',
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

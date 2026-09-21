/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bic: {
          navy: '#0B1A2E',
          'navy-dark': '#07111E',
          'navy-light': '#132845',
          blue: '#1D70B8',
          'blue-light': '#3B82F6',
          'blue-pale': '#EBF3FB',
          yellow: '#F5A623',
          green: '#27AE60',
          red: '#EB5757',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { oswald: ['Oswald', 'sans-serif'], inter: ['Inter', 'sans-serif'] },
      colors: {
        brand: {
          primary: '#8B1A4A',
          accent: '#D4A5B5',
          light: '#FDF5F8',
          dark: '#4A0D27',
        }
      }
    }
  },
  plugins: []
}

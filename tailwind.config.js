module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'location': 'repeat(auto-fill, minmax(180px, 1fr))'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'overlay': 'rgba(0,0,0,0.6)'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config } */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        
      },
      minHeight: {
        'n-screen': 'calc(100vh - 132px)'
      },
      height: {
        "d-screen": 'calc(100vh - 64px)',
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


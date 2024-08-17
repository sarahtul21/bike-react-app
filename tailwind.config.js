

/** @type {import('tailwindcss').Config & {daisyui: import('daisyui').Config}} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    extend: {
      colors: {
        'main-color': "#65b946",
        'second-color': "#313A4E",
        'third-color': "#f0f2f5"
      },
      
      // height: {
      //   'd-screen': 'var(--vh100)'
      // },
      
      backgroundColor: {
        'dark-bg': "rgba(0, 0, 0, 1)",
        'gray-bg': '#0f0f0f',
        'light-bg': "#b89867",
      },
      minHeight: {
        'n-screen': 'calc(100vh - 132px)'
      },
      height: {
        "d-screen": 'calc(100vh - 64px)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
// #717171  #030303   #030303     font #af997f

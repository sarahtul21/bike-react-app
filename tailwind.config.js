import colors from 'tailwindcss/colors';
import themes from "./node_modules/daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config & {daisyui: import('daisyui').Config}} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
      },
      height: {
        "d-screen": 'var(--vh100)'
      }
    },
  },
  daisyui: {
    themes: [
        {
            light: {
                ...themes['light'],
                primary: colors.blue['500'],
                "primary-content": 'white',
                secondary: 'white',
                "secondary-content": colors.blue['500'],
            },
        },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}


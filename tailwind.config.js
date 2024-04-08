import { addDynamicIconSelectors } from '@iconify/tailwind';
/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')
import colors from 'tailwindcss/colors';
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors:{
      ...colors,
      "primary": "#1555E9",
      "secondary": "#0B95E7",
      "tertiary": "#00E7BA",
      "defaultTheme":'f8f8f8',
      "darkTheme":'#1e293b',
      "darkAux":"#0f172a",
      },
      fontFamily: { 
        Montserrat: ["Montserrat", "sans-serif"],
      },
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}






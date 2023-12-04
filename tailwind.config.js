/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'sage': '#90BDA8',
      'sage2': '#9A9E88',
      'bone': '#EADFCD',
      'dark-green': '#124543',
      'antique-white': '#F0E4D1',
      'orange': '#C03E02',
      'raspberry': '#E0447D',
      'baby-blue': '#CAD8DE',
      'blue': '#1fb6ff',
      'citron': '#CDC85D',
      'purple': '#7e5bef',
      'pink': '#FDB4C5',
      'violet': '#9A7AA0',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
        fontFamily: {
          brightMelody: ['BrightMelody'],
          mondeur: ['Mondeur'],
          tapioca: ['Tapioca', 'sans-serif'],
          tapiocaShadow: ['Tapioca-Shadow'],
          
        }
    },
  },
  plugins: [],
}


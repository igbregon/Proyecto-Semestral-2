/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    },
    colors: {
      'amarillo-ppal': '#ffbd59'
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms')
,require('@tailwindcss/typography')
],
};

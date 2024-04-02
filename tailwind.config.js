/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        GrayShades : {
          light : 'rgb(134 134 134 / 37%)',
          medium : 'rgb(94, 94, 94)' ,
          dark : 'rgb(25, 25, 25)'
        },
        BlackShades : {
          light : '#191919'
        }
      }
    },
  },
  plugins: [],
}
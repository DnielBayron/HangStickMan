/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: "Robot",
        Sedgwick: "Sedgwick Ave Display ",
        Play: "Playpen Sans"
      },
      rotate: {
        '30': '-30deg',
        '35': '30deg',
        '60': '60deg',
        '65': '-60deg',
      },
      visibility: {
        'visible': 'visible',
        'hidden': 'hidden',
      },
    },
  },
  variants: {},
  plugins: [],
}


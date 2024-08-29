/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      animation:{
        'gradient': 'gradient 8s ease infinite', // gradient animation for hero name
        'typewriter':'typewriter 4s steps(11) forwards', // typewriter animation for hero subtext
        'caret': 'typewriter 4s steps(11) forwards, blink 1s step-end infinite', // caret animation for hero subtext
      },
      keyframes: {
        gradient: {to : {backgroundPosition: '200% center'}},
        typewriter :{to: {left: '100%'}},
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          }
        },
      }
    },
  },
  plugins: [],
};

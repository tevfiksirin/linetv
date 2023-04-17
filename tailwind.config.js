module.exports = {
  content: ['./node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffe2d0",
          200: "#ffc5a1",
          300: "#fea771",
          400: "#fe8a42",
          500: "#fe6d13",
          600: "#cb570f",
          700: "#98410b",
          800: "#662c08",
          900: "#331604"
        },        
        secondary: {
          100: "#d4d5da",
          200: "#a9abb6",
          300: "#7e8191",
          400: "#53576d",
          500: "#282d48",
          600: "#20243a",
          700: "#181b2b",
          800: "#10121d",
          900: "#08090e"
        },
        green: {
          100: "#d3f3df",
          200: "#a7e8bf",
          300: "#7adc9e",
          400: "#4ed17e",
          500: "#22c55e",
          600: "#1b9e4b",
          700: "#147638",
          800: "#0e4f26",
          900: "#072713"
        },
      },
    },
  },
  plugins: [require('flowbite/plugin'),require('flowbite-typography'),],
};
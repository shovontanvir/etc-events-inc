module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        diphylleia: ['Diphylleia', 'serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        concert: "url('../src/assets/images/concert-banner.jpg')",
      },
    },
  },
  plugins: [],
};
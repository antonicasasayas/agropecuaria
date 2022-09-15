/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      dancing: ["Dancing Script"],
      "roboto-light": ["Roboto Light"],
      "roboto-bold": ["Roboto Bold"],
    },
    extend: {
       width: {
        '68': '17rem',
      },
      borderRadius: {
        huge: "50%",
        massive: '20%'
      },
      colors: {
        background: "#57AC49",
        mustard: "#F1B53C",
      },
    },
  },
  plugins: [],
};

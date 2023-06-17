/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D6363",
        secondary: "#E0F1DF",
        info: "#CCE8C94D",
        border: "#E1E4EA",
        paragraph: "#546078",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      listStyleImage: {
        checkmark: 'url("/checkmark.svg")',
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};

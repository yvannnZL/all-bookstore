/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navigation: "#F1F1F1",
        search: "#3F2A2A",
        green: {
          50: '#A2AD84'
        }
      },
    },
  },
  plugins: [],
};

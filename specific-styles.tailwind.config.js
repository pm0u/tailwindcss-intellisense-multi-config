/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "components/specific-components/**/*.{js,jsx,ts,tsx}",
    "pages/specific-pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      red: "#aa00ff",
    },
  },
  plugins: [],
  prefix: "specific-",
}

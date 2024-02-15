/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        payne: "#3a6b7e", //gray
        persian: "#2A9D8F", //green
        saffron: "#E9C46A", //yellow
        sandy: "#F4A261", //brown
        powder: "#fbfefb", //white
        tomato: "#FF5F42", //red
      },
    },
  },
  plugins: [],
});

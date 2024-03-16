/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Tuna: "#35374B",
        Spruce: "#344955",
        Marble: "#50727B",
        Oxley: "#78A083",
        LightGrey: "#D9D9D9",
      },
    },
  },
  plugins: [],
};

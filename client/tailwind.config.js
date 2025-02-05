/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#151030",
        secondary: "#8377c573",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "checkbox-checked": "#151030",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", "@tailwindcss/forms"],
};

const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        themegray: "#f8f7f2",
        textgray: "#a3a3a3",
      },
    },
  },
  plugins: [flowbite.plugin()],
};

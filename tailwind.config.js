/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF", // Updated from Bannar.jsx request
        "background-light": "#F0F4F8",
        "background-dark": "#0D1120",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/theme/object")["light"],
          primary: "#007BFF",
          "base-100": "#F0F4F8",
        },
        dark: {
          ...require("daisyui/theme/object")["dark"],
          primary: "#007BFF",
          "base-100": "#0D1120",
        },
      },
      "light",
      "dark",
    ],
  },
};

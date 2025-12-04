module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mycustomtheme: {
          "primary": "#F08080",
          "primary-focus": "#C46C6C",
           "primary-content": "#FFFFFF",

          "secondary": "#E63946",
          "secondary-focus": "#B32B37",
          "secondary-content": "#FFFFFF",

          "accent": "#FFB6B9",
          "accent-focus": "#D9A0A3",
          "accent-content": "#000000",

          "neutral": "#F8F8F8",
          "neutral-focus": "#D9D9D9",
          "neutral-content": "#1F1F1F",

          "base-100": "#FFFFFF",           // Primary background
          "base-200": "#F8F8F8",           // Secondary background
          "base-300": "#FFE5E5",           // Soft red highlight
          "base-content": "#1F1F1F",       // Default text

          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
        },
        mycustomdark: {
          "primary": "#B32B37",
          "primary-focus": "#7A1D23",
          "primary-content": "#FFFFFF",

          "secondary": "#C46C6C",
          "secondary-focus": "#834545",
          "secondary-content": "#FFFFFF",

          "accent": "#D9A0A3",
          "accent-focus": "#9C6B6B",
          "accent-content": "#000000",

          "neutral": "#1F1F1F",
          "neutral-focus": "#111111",
          "neutral-content": "#F8F8F8",

          "base-100": "#121212",           // Dark background
          "base-200": "#1F1F1F",
          "base-300": "#2A2A2A",
          "base-content": "#F8F8F8",       // Light text

          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
        }
      },
      "light",
      "dark",
    ],
    darkTheme: "mycustomdark",  // Use your custom dark theme as default dark
  },
};/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#2563EB",
          "primary-focus": "#1D4ED8",
          "primary-content": "#FFFFFF",

          secondary: "#FACC15",
          "secondary-focus": "#EAB308",
          "secondary-content": "#111827",

          accent: "#22D3EE",
          "accent-focus": "#06B6D4",
          "accent-content": "#020617",

          neutral: "#0F172A",
          "neutral-focus": "#020617",
          "neutral-content": "#E5E7EB",

          "base-100": "#020617",
          "base-200": "#020617",
          "base-300": "#0B1220",
          "base-content": "#E5E7EB",

          info: "#38BDF8",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#F97373",
        },
      },
      {
        dark: {
          primary: "#1D4ED8",
          "primary-focus": "#1E40AF",
          "primary-content": "#FFFFFF",

          secondary: "#EAB308",
          "secondary-focus": "#CA8A04",
          "secondary-content": "#111827",

          accent: "#06B6D4",
          "accent-focus": "#0891B2",
          "accent-content": "#020617",

          neutral: "#020617",
          "neutral-focus": "#000000",
          "neutral-content": "#E5E7EB",

          "base-100": "#020617",
          "base-200": "#182A70",
          "base-300": "#040921",
          "base-400": "#040921",
          "base-content": "#E5E7EB",

          info: "#38BDF8",
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#F97373",
        },
      },
    ],
  },
};

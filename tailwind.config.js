/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#570df8",

          secondary: "#FF385C",

          accent: "#1dcdbc",

          neutral: "#2b3440",

          "base-100": "#ffffff",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
        dark: {
          primary: "#f1c6ff",

          secondary: "#cc4b2a",

          accent: "#9ff9f2",

          neutral: "#fff",

          "base-100": "#04152D",

          info: "#75d9f5",

          success: "#2cce9b",

          warning: "#f0b60a",

          error: "#fc6471",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

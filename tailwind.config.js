module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      screens: {
        // floating-panel layout: needs width AND height,
        // so landscape phones keep the stacked layout
        desk: { raw: "(min-width: 768px) and (min-height: 600px)" },
        "desk-lg": { raw: "(min-width: 1024px) and (min-height: 600px)" },
        // short landscape screens (phones on their side): side columns
        land: { raw: "(orientation: landscape) and (max-height: 599px)" },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: { DEFAULT: "#7c5cff", light: "#a78bfa", dark: "#5b3fd6" },
        surface: "#0c0a1d",
      },
      boxShadow: {
        glow: "0 0 24px rgba(124, 92, 255, 0.45)",
      },
    },
  },

  plugins: [],
};
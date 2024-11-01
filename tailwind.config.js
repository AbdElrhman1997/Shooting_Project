// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#212529", // Overrides default black with your custom color
        main: "#ec3237",
      },
      textAlign: {
        inherit: "inherit", // Add align-items: inherit
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-justify": {
          "text-align": "justify",
          "word-spacing": "-1px",
        },
      });
    },
  ],
};

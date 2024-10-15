// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#212529", // Overrides default black with your custom color
        main: "#ec3237",
      },
    },
  },
  plugins: [],
};

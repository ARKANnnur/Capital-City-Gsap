/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
      },
      colors: {
        dark: {
          50: "#242424",
          100: "#2E3C48",
        },
        light: {
          50: "#E6F0FA ",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255, 255, 255, 0.5) transparent", // Warna setengah transparan untuk efek glass
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "0.5em", // Lebar lebih kecil
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Efek glass dengan transparansi
            borderRadius: "100vw",
            border: "1px solid rgba(255, 255, 255, 0.2)", // Border tipis untuk efek glass
            backdropFilter: "blur(4px)", // Efek blur untuk efek glass
          },
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1660px",
      },
      animation: {
        hover: "hover 3s ease-in-out infinite",
        hoversm: "hoversm 3s ease-in-out infinite",
        hovermd: "hovermd 3s ease-in-out infinite",
      },
      keyframes: {
        hoversm: {
          "0%, 100%": { transform: "translateY(15px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        hover: {
          "0%, 100%": { transform: "translateY(20px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        hovermd: {
          "0%, 100%": { transform: "translateY(30px)" },
          "50%": { transform: "translateY(-30px)" },
        },
      },
    },
  },
  plugins: [],
};

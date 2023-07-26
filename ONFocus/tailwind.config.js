/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    animation: {
      blob: "blob 5s infinite",
    },
    keyframes: {
      blob: {
        "0%": {
          transform: "translate(0)",
        },
        "50%": {
          transform: "translateY(-24px)",
        },
        "100%": {
          transform: "translateY(0)",
        },
      },
    },
  },
  plugins: [],
};

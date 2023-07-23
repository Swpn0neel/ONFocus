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
        // "0%": {
        //   transform: "translate(0px, 0px) scale(1)",
        // },
        // "33%": {
        //   transform: "translate(30px, -50px) scale(1.1)",
        // },
        // "66%": {
        //   transform: "translate(-20px, 20px) scale(0.9)",
        // },
        // "100%": {
        //   transform: "tranlate(0px, 0px) scale(1)",
        // },
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

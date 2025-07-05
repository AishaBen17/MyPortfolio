/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ["Nunito", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(267deg, #c471ed 0%, #d3444e 100%)",
        "text-gradient": "linear-gradient(267deg, #c471ed 0%, #d3444e 100%)",
      },
      textGradient: {},
      colors: {
        bgColor: "#2E0238",
        
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(14deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "45%": { transform: "rotate(14deg)" },
          "60%": { transform: "rotate(-4deg)" },
          "75%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 2s infinite",
      },
      transformOrigin: {
        hand: "70% 70%",
      },
    },
  },
  plugins: [],
};

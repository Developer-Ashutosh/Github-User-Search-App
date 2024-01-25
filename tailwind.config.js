/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        blue: "#0079FF",
        "button-hover": "#60ABFF",
      },
      backgroundColor: {
        primary: "#F6F8FF",
        secondary: "#FEFEFE",
        darkPrimary: "#141D2F",
        darkSecondary: "#1E2A47",
      },
      textColor: {
        primary: "#222731",
        secondary: "#2B3442",
        ternary: "#4B6A9B",
        joined: "#697C9A",
        darkPrimary: "#FFFFFF",
        darkSecondary: "#FEFEFE",
        darkTernary: "#F6F8FF",
        darkJoined: "#F6F8FF",
      },
      boxShadow: {
        custom: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
      },
      fontFamily: {
        spacemono: ["Spacemono", "monospace"],
        "spacemono-bold": ["Spacemono-Bold", "monospace"],
      },
    },
  },
  plugins: [],
};

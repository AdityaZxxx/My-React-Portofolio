// tailwind.config.js
const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "neo-yellow": "#FFFF00",
        "neo-pink": "#FF90E8",
        "neo-blue": "#7DF9FF",
        "neo-green": "#00FF66",
        "dark-bg": "#121212",
        "light-bg": "#F5F5F5",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        neo: "5px 5px 0px 0px rgba(0,0,0,1)",
        "neo-hover": "8px 8px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};

export default config;

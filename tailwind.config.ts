import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-slate": "#2A2A2A",
        "off-white": "#F5F5F5",
        "earth-tone": "#A67C52",
        "sage-green": "#7D9D8C",
        "soft-blue": "#8CA3B7",
        "pure-white": "#FFFFFF",
        "light-gray": "#E0E0E0",
        "medium-gray": "#888888",
        "charcoal": "#1A1A1A",
        "success-green": "#4CAF50",
        "alert-red": "#F44336",
        "warning-amber": "#FFC107",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        raleway: ["var(--font-raleway)", "Helvetica", "Arial", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

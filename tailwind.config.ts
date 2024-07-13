import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      custom: {
        primary: "#f08080",
        secondary: "#6d3332",
        accent: "#bf5351",
        text: "#fed6d5",
        background: "#1c0001",
      },
    },
  },
  plugins: [],
} satisfies Config;

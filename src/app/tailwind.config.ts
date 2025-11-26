// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#004276",
          navyDark: "#002C4D",
          red: "#E3343F",
          green: "#2BAF3B",
          cream: "#FFFDF7",
          slate: "#1F2933",
        },
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-lora)", "ui-serif", "Georgia", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#EF5824", // Orange
          dark: "#D94818",
          light: "#FFF1EB", // Light peach nav
        },
        secondary: {
          DEFAULT: "#DFADF4", // Lilac
          dark: "#C68FE0",
        },
        accent: {
          DEFAULT: "#5568FE", // Blue
          dark: "#4354E6",
        },
        background: {
          DEFAULT: "#FFFFFF",
          alt: "#F9FAFB",
        },
        slate: {
          800: "#1F2937",
          900: "#111827",
        }
      },
    },
  },
  plugins: [],
};
export default config;

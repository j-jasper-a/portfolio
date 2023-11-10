import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      regular: "var(--font-regular)",
      special: "var(--font-special)",
    },
    borderRadius: {
      DEFAULT: "0.5rem",
    },
    padding: {
      sm: "0.5rem",
      lg: "2rem",
      md: "1rem",
      xl: "4rem",
    },
    gap: {
      sm: "0.5rem",
      lg: "2rem",
      md: "1rem",
      xl: "4rem",
    },
    margin: {
      auto: "auto",
      sm: "0.5rem",
      lg: "2rem",
      md: "1rem",
      xl: "4rem",
    },
    space: {
      sm: "0.5rem",
      lg: "2rem",
      md: "1rem",
      xl: "4rem",
    },
    colors: {
      transparent: "transparent",
      foreground: "hsl(26, 47%, 5%)",
      background: "hsl(26, 47%, 97%)",
      "foreground-dark": "hsl(26, 47%, 97%)",
      "background-dark": "hsl(26, 47%, 5%)",
    },
    extend: {},
  },
  plugins: [],
};

export default config;

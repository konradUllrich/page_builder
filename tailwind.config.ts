import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB17A",
        secondary: "#FCE762",
        white: "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

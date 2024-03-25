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
        primary: {
          300: "#5FF7DF",
          500: "#0DE3C0",
          700: "#09816E"
        },
        danger: {
          300: "#FF303A",
          500: "#ED1D27",
          700: "#C7000A"
        }
      }
    },
  },
plugins: [],
};
export default config;

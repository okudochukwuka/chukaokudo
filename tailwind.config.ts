import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#F2EFE7",
        inkSoft: "#A8A296",
        paper: "#0B0C0E",
        band: "#141619",
        sage: "#6E9BC2",
        sageDark: "#4C7699",
        amber: "#6E9BC2",
        line: "#2A2C30",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "serif"],
        sans: ["var(--font-plex)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16202B",
        inkSoft: "#4B5A68",
        paper: "#FFFFFF",
        band: "#EEF1F0",
        sage: "#3E7C74",
        sageDark: "#2C5B55",
        amber: "#E2A63B",
        line: "#DDE3E1",
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

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#effce9",
          "100": "#dbf7d0",
          "200": "#baf1a5",
          "300": "#8fe571",
          "400": "#69d645",
          "500": "#42a923",
          "600": "#35951b",
          "700": "#2b7219",
          "800": "#255b19",
          "900": "#234d1a",
          "950": "#0e2a09",
        },
        neutral: {
          "50": "#f5f5f6",
          "100": "#e6e6e7",
          "200": "#cfcfd2",
          "300": "#aeaeb2",
          "400": "#86878a",
          "500": "#6b6c70",
          "600": "#5b5b5f",
          "700": "#4d4d51",
          "800": "#444546",
          "900": "#3c3c3d",
          "950": "#252527",
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
        text: {
          main: "var(--color-text-main)",
          sub: "var(--color-text-sub)",
          third: "var(--color-text-third)",
        },
      },
      fontFamily: {
        inter: "var(--font-inter500)",
        limeLight: "var(--font-lime-light400)",
        noto: "var(--font-noto-sans-jp500)",
      },
    },
  },
  plugins: [
    function ({ addBase }: PluginAPI) {
      addBase({
        ":root": {
          "--color-background": "#2588FF",
          "--color-primary": "#00B2FF",
          "--color-secondary": colors.white,
          "--color-tertiary": "#2562FF",
          "--color-quaternary": "#000000",
          "--color-text-main": "#FFFFFF",
          "--color-text-sub": "#00B2FF",
          "--color-text-third": "#000000",
        },
        ".fluffy": {
          "--color-background": "#7ECFFF",
          "--color-primary": "#7ECFFF",
          "--color-secondary": "#FFFFFF",
          "--color-tertiary": "#FFBBE6",
          "--color-quaternary": "#2588FF",
          "--color-text-main": "#FFFFFF",
          "--color-text-sub": "#00B2FF",
          "--color-text-third": "#00B2FF",
        },
        ".cafe": {
          "--color-background": "#DDCFB6",
          "--color-primary": "#A69986",
          "--color-secondary": "#FFFFFF",
          "--color-tertiary": "#947654",
          "--color-quaternary": "#4E3A12",
          "--color-text-main": "var(--color-secondary)",
          "--color-text-sub": "#85755F",
          "--color-text-third": "#4E3A12",
        },
        "div,a,p,button,small": {
          transition: "background-color 0.5s ease, color 0.5s ease",
        },
      });
    },
  ],
} satisfies Config;

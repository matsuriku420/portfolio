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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        text: {
          main: "var(--color-text-main)",
          sub: "var(--color-text-sub)",
        },
      },
    },
  },
  plugins: [
    function ({ addBase }: PluginAPI) {
      addBase({
        ":root": {
          "--color-primary": "#00B2FF",
          "--color-secondary": colors.white,
          "--color-tertiary": "#2562FF",
          "--color-text-main": colors.white,
          "--color-text-sub": "#00B2FF",
        },
      });
    },
  ],
} satisfies Config;

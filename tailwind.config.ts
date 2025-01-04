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
        },
      });
    },
  ],
} satisfies Config;

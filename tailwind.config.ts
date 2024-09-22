import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    hljs: {
      theme: "github-dark",
    },
  },
  plugins: [require("tailwind-highlightjs")],
  safelist: [
    {
      pattern: /hljs+/,
    },
  ],
};
export default config;

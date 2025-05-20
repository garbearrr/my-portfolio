import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: "#020617",
          900: "#031128",
          800: "#061a39",
          700: "#0b294f",
        },
      },
    },
  },
  plugins: [],
};
export default config;

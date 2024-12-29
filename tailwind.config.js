/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // React files
  ],
  theme: {
    extend: {
      // Optional: Add custom themes or extend colors
    },
  },
  plugins: [
    require("tailwind-animate"), // Include animations for shadcn components
  ],
};

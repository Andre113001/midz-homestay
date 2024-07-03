/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
      'tablet': '690px',
      'phone': '250px',      // Custom screen size for phones
      'desktop': '1024px',   // Custom screen size for desktops
      'widescreen': '1440px', // Custom screen size for widescreens
    },
    extend: {},
  },
  plugins: [],
}
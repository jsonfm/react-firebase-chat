/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3604c5",
        secondary: "#d300d1",
        neutral: "#242933",
        success: "#14c609",
        info: "#6b01bd",
        dark: "#11141a"
      }
    },
  },
  plugins: [],
}


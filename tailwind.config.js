/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '376px',
      // => @media (min-width: 376px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }    
    },
    extend: {
      colors: {
        Tomato: "#ff6257",
        DarkSlate: "#242742",
        CharcoalGrey: "#36384e",
        Grey: "#9294a0",
        White: "#ffffff",
    }
    },
  },
  plugins: [],
}
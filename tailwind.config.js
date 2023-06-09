/** @type {import('tailwindcss').Config} */
module.exports = {
  node: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 
  theme: {
    extend: {},
  },
  variant: {
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B87333', // Copper/Bronze color for tequila theme
        secondary: '#8B4513', // Saddle brown for accent
        accent: '#DAA520', // Golden rod for highlights
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair-display)'],
      },
    },
  },
  plugins: [],
} 

// export default {
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["var(--font-polysans)", "sans-serif"],
//       },
//     },
//   },
// };


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ enables light & dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-polysans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

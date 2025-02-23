/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ["Audiowide", "cursive"],
        bilbo: ["Bilbo Swash Caps", "cursive"],
        charm: ["Charm", "cursive"],
        courgette: ["Courgette", "cursive"],
        lavishly: ["Lavishly Yours", "cursive"],
        lugrasimo: ["Lugrasimo", "cursive"],
        montez: ["Montez", "cursive"],
        mystery: ["Mystery Quest", "cursive"],
        sofia: ["Princess Sofia", "cursive"],
      },
    },
  },
  plugins: [],
};

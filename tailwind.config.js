/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/assets/img-1.jpg')",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark", "coffee"],
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
};

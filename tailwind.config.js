/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#313bac",
        hero_bg: "rgba(250, 251, 254, 0.7)",
        hero_bg_2: "#fcfeff",
        primary_2: "#fcfeff",
      },
      backgroundImage: {
        bgImage_1:
          "url('https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700223294/Vector-bg_ijfifv.png')",
        bgImage_dark:
          'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url("https://asset.gecdesigns.com/img/background-templates/dark-blue-background-with-the-diamond-pattern-template-sr06012408-1704699724568-cover.webp")',
      },
      fontFamily: {
        Mullish: "Mullish",
        Outfit: "Outfit",
      },
      boxShadow: {
        headerShadow: "0px 2px 12px 0px rgba(196, 214, 222, 0.25);",
        darkHeaderShadow: "0px 2px 12px 0px rgba(0, 0, 0, 0.5);",
      },
    },
  },
  plugins: [],
};

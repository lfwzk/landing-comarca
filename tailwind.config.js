module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      comarca: "#f03648",
      comarcaGray: "#EAEAEA",
      comarcaPurple: "#663282",
      comarcaBlue: "#03989E",
      comarcaYellow: "#EBFC20",
      comarcaOrange: "#FAB328",
    },
    fontFamily: {
      exo: ["Exo"],
    },
    extend: {
      backgroundImage: () => ({
        "login-background":
          "linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url('/src/assets/img/background-1920x1280.jpg')",
        "landing-background":
          "linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url('/src/assets/img/background-comarca.jpg')",
        "profile-background":
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
        "background-comarca-services":
          "linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url('/src/assets/img/spaces/Comarca/sala1.jpg')",
      }),
    },
  },
  variants: {
    scrollSnapType: ["responsive"],
    content: [],
    extend: {},
  },
  plugins: [require("tailwindcss-scroll-snap")],
};

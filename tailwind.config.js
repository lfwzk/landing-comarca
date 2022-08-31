module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      comarca: "#f03648",
      comarcaGray: "#EAEAEA",
      comarcaPurple: "#6B0D9E",
      comarcaBlue: "#03989E",
      comarcaYellow: "#EBFC20",
      comarcaOrange: "#FAB328",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ['"Roboto Slab"', "serif"],
      body: ["Roboto", "sans-serif"],
      exo: ["Exo 2"],
    },
    extend: {
      backgroundImage: () => ({
        "login-background":
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1280.jpg')",
        "landing-background":
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-comarca.jpg')",
        "profile-background":
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
        "background-comarca-services":
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/spaces/Comarca/sala1.jpg')",
      }),
    },
  },
  variants: {
    content: [
      "./src/**/*.{html,js}",
      "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};

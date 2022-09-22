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
      comarcaBlack: "#000000",
      academiaazul: "#043f8f",
      academiaceleste: "#069be1",
    },
    fontFamily: {
      exo: ["Exo"],
    },

    backgroundImage: () => ({
      "login-background":
        "linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url('/src/assets/img/background-1920x1280.jpg')",
      "landing-background":
        "linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url('https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      "profile-background":
        "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
      "background-comarca-services":
        "linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    }),
    extend: {},
  },
  variants: {
    scrollSnapType: ["responsive"],
    content: [],
    extend: {},
  },
  plugins: [require("tailwindcss-scroll-snap")],
};

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.js", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      comarca: "#56042C",
      comarcaGray: "#EAEAEA",
      comarcaPurple: "#663282",
      comarcaBlue: "#49BCE3",
      comarcaYellow: "#FEC310",
      comarcaOrange: "#FAB328",
      comarcaBlack: "#000000",
      academiaazul: "#043f8f",
      academiaceleste: "#069be1",
      qatar: "#f03648",
      qatar2: "#EBFC20",
      qatar3: "#03989E",
    },
    fontFamily: {
      exo: ["Exo"],
    },
    extend: {
      backgroundImage: () => ({
        "login-background":
          "linear-gradient(180deg, rgba(0,0,0,0) 12%, rgba(86,4,44,1) 41%, rgba(0,0,0,1) 90%), url('/src/assets/img/background-1920x1280.jpg')",
        // "linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url('/src/assets/img/background-1920x1280.jpg')",
        "landing-background":
          "linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url('https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        "profile-background":
          "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
        "background-comarca-services":
          "linear-gradient(180deg, rgba(0,0,0, 0) 12%, rgba(0,0,0, 0) 16%, rgba(0.0.0.1) 80% ), url('https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }),
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      marquee2: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0%)" },
      },
      animation: {
        "spin-slow-30": "spin 30s linear infinite",
        "spin-slow-25": "spin 25s linear infinite",
        "spin-slow-10": "spin 10s linear infinite",
        "marquee-infinite": "marquee 25s linear infinite",
      },
    },
  },
  variants: {
    scrollSnapType: ["responsive"],
    content: [],
    extend: {},
  },
  plugins: [require("tailwindcss-scroll-snap")],
};

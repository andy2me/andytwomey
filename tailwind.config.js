module.exports = {
  theme: {
    screens: {
      xs: "425px",
      // => @media (min-width: 425px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1440px",
      // => @media (min-width: 1440px) { ... }

      xxxl: "1600px"
      // => @media (min-width: 1600px) { ... }
    },
    extend: {
      colors: {
        primary: "#5f00ff",
        bgLight: "#ececec"
        // gray: {
        //   200: "#ececec"
        // }
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem"
      },
      lineHeight: {
        negative: ".75"
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "1/3": "33.33333333333333%",
        "2/3": "66.66666666666666%",
        "7xl": "80rem",
        "8xl": "90rem",
        "9xl": "100rem"
      }
    }
  },
  variants: {},
  plugins: []
};

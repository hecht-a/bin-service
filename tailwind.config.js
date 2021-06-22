module.exports = {
  purge: ["./resources/views/**/*.edge"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      success: "#00b23d",
      error: "#df3c3c",
      dark: "#1E1E1EFF",
      light: "#FAFAFAFF",
      transparent: "transparent",
      red: {
        900: "#ca1a1a",
        800: "#d22727",
        700: "#d72e2e",
        600: "#db3636",
        500: "#df3c3c",
        400: "#e45959",
        300: "#e97777",
        200: "#ef9e9e",
        100: "#f5c5c5",
        50: "#fbe8e8",
      },
    },
    borderWidth: {
      none: "none",
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      spacing: {
        "1/10": "10%",
        "9/10": "90%",
        "30": "30px",
      },
      inset: {
        20: "20px",
        27: "27px",
        50: "50px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

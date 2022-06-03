module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        "IBM Plex Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    extend: {
      fontSize: {
        "10xl": [
          "10rem",
          {
            lineHeight: 1,
          },
        ],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "4rem",
        "6xl": "6rem",
        "7xl": "8rem",
      },
      spacing: {
        "1/5": "20%",
        "1/6": "16.6666%",
        "1/7": "14.28571%",
        "1/8": "12.5%",
        "1/9": "11.1111%",
        "1/10": "10%",
      },
    },
  },
  plugins: [],
};
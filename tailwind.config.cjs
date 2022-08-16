const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#0011FF"
      },
      backgroundColor: theme => ({
        fill: {
          base: theme("colors.primary")
        }
      })
    }
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".base-wrapper": {
          backgroundColor: theme("backgroundColor.fill.base"),
          height: "100%",
          width: "100%",
          color: "white"
        },
        ".page-wrap": {
          height: "100%",
          width: "100%",
          overflowY: "auto",
          paddingBottom: "calc(var(--footer-height) + 20px)"
        }
      });
    })
  ]
};

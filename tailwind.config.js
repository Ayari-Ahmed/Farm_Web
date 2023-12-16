module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 500: "#adadad", 600: "#7f7f7f" },
        white: { A700_d1: "#ffffffd1", A700_bf: "#ffffffbf", A700: "#ffffff" },
        blue_gray: {
          400: "#8d8d8d",
          900: "#263238",
          "900_4f": "#2632384f",
          "900_66": "#26323866",
        },
        light_green: {
          700: "#779341",
          "700_4c": "#7793414c",
          A200_63: "#c7ff5c63",
        },
        green: { 900: "#008000" },
        blue: { A200: "#4285f4", "100_19": "#c0dcea19", "100_26": "#c0dcea26" },
        lime: { A200_42: "#f1ff5242" },
        black: { 900: "#000000" },
        light_blue: { "300_1e": "#52c5ff1e" },
      },
      boxShadow: { bs: "0px 4px  19px 0px #7793414c" },
      fontFamily: {
        spartan: "Spartan",
        poppins: "Poppins",
        lato: "Lato",
        roboto: "Roboto",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

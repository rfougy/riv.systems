import { ITheme } from "../interfaces/ITheme";

export const lightTheme: ITheme = {
  id: "light",
  primary: "#101010",
  secondary: "#f0f0f0",
  highlight: "#e0e0e0",
  idle: "#ffffff",
  red: "#DD4F3F",
  yellow: "rgba(228, 208, 10, 0.5)",
};

export const darkTheme: ITheme = {
  id: "dark",
  primary: "#ffffff",
  secondary: "#101010",
  highlight: "#2F2F2F",
  idle: "#1A1A1A",
  red: "#DD4F3F",
  yellow: "rgba(228, 208, 10, 0.675)",
};

export const breakpoints = {
  xxs: "28.75em", // 460px
  xs: "40em", // 640px
  sm: "60em", // 960px
  md: "80rem", // 1280px
  components: {
    slideshow: {
      xs: "28.75em", // 460px
      sm: "32.1875em", // 515px
      md: "35.625em", // 570px
    },
  },
  useViewportWidth: {
    xs: 640, // 640px | 40em
  },
};

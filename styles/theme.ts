import { ITheme } from "../interfaces/ITheme";

export const lightTheme: ITheme = {
  id: "light",
  primary: "#101010",
  secondary: "#f0f0f0",
  highlight: "#e0e0e0",
  idle: "#ffffff",
  red: "#DD4F3F",
};

export const darkTheme: ITheme = {
  id: "dark",
  primary: "#ffffff",
  secondary: "#101010",
  highlight: "#2F2F2F",
  idle: "#1A1A1A",
  red: "#DD4F3F",
};

export const breakpoints = {
  xxs: "460px", //25em
  xs: "640px", // 40em
  sm: "960px", //60em
  components: {
    slideshow: {
      xs: "460px", //25rem
      sm: "515px", //40rem
      md: "570px", //60rem
    },
  },
};

export const mediaRatios = {};

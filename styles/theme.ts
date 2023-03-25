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
  xxs: "28.75em",
  xs: "40em",
  sm: "60em",
  components: {
    slideshow: {
      xs: "28.75em",
      sm: "32.1875em",
      md: "35.625em",
    },
  },
  useViewportWidth: {
    xs: 640, // 640px / 40em
  },
};

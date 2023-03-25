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
  xs: 640,
  sm: 960,
  components: {
    slideshow: { xs: 460, sm: 515, md: 570 },
  },
};

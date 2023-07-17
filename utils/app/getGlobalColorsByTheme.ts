import { ITheme } from "../../interfaces/ITheme";

export function getGlobalColorsByTheme(currTheme: ITheme): string {
  return `
    body {
      background-color: ${currTheme.secondary};
      transition: 100ms ease-in; // ease-in for theme toggling
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    caption,
    li {
      color: ${currTheme.primary};
    }

    a {
      color: ${currTheme.primary};
    }

    button {
      color: ${currTheme.primary};
      background-color: ${currTheme.secondary};
    }

    label {
      color: ${currTheme.primary};
    }
  `;
}

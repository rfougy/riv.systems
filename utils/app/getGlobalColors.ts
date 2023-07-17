import { SerializedStyles, css } from "@emotion/react";

import { ITheme } from "../../interfaces/ITheme";
import { breakpoints } from "../../styles/theme";

export function getGlobalColors(currTheme: ITheme): SerializedStyles {
  return css`
    body {
      background-color: ${currTheme.secondary};
      transition: 100ms ease-in; // ease-in for theme toggling
    }

    body::-webkit-scrollbar {
      width: 0.75rem;
      height: 0;

      @media (max-width: ${breakpoints.xs}) {
        width: 0.5rem;
        height: 0;
      }
    }

    body::-webkit-scrollbar-track {
      background-color: transparent;
      border-left: 0.1rem solid ${currTheme.primary};
    }

    body::-webkit-scrollbar-thumb {
      height: 0;
      width: 1rem;
      background-color: none;
      border-top: 0.1rem solid ${currTheme.primary};

      opacity: 0.5;
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

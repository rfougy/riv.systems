import { ITheme } from "../../interfaces/ITheme";
import { breakpoints } from "../../styles/theme";

export function getScrollbarStyles(currTheme: ITheme): string {
  return `
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
  `;
}

import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";

export const Logo = styled.div`
  width: 10rem;

  img {
    -webkit-filter: ${({ theme }: { theme?: ITheme }) =>
      theme && theme.id === "light" ? "invert(0)" : "invert(1)"};

    filter: ${({ theme }: { theme?: ITheme }) =>
      theme && theme.id === "light" ? "invert(0)" : "invert(1)"};
  }

  @media (max-width: 40em) {
    width: 2.25rem;
    height: 1rem;
  }
`;

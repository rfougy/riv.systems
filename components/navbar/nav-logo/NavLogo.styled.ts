import { breakpoints } from "./../../../styles/theme";
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

  a {
    position: relative;
    width: 10rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: ${breakpoints.xs}) {
      width: 2.25rem;
      height: 1.25rem;
    }
  }

  width: 10rem;

  @media (max-width: ${breakpoints.xs}) {
    width: 2.25rem;
    height: 1.25rem;
  }
`;

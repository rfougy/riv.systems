import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";

export const Button = styled.button`
  all: unset;
  width: 0.75rem;
  height: 0.75rem;
  position: relative;

  img {
    -webkit-filter: ${({
      isActive = true,
      theme,
    }: {
      isActive?: boolean;
      theme: ITheme;
    }) =>
      isActive
        ? theme.id === "light"
          ? "invert(0)"
          : "invert(1)"
        : "invert(0.5)"};
    filter: ${({
      isActive = true,
      theme,
    }: {
      isActive?: boolean;
      theme: ITheme;
    }) =>
      isActive
        ? theme.id === "light"
          ? "invert(0)"
          : "invert(1)"
        : "invert(0.5)"};

      &:hover {
        "-webkit-filter": ${(props: any) =>
          props.theme.id === "light" ? "invert(0)" : "invert(1)"};
        filter: ${(props: any) =>
          props.theme.id === "light" ? "invert(0)" : "invert(1)"};
      }
  }

  @media(max-width: 40em) {
    width: 0.9rem;
    height: 0.9rem;
  }
`;

import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";

export const Button = styled.button`
  all: unset;

  img {
    -webkit-filter: ${({
      isCurrView,
      theme,
    }: {
      isCurrView: boolean;
      theme: ITheme;
    }) =>
      isCurrView
        ? theme.id === "light"
          ? "invert(0)"
          : "invert(1)"
        : "invert(0.5)"};
    filter: ${({ isCurrView, theme }: { isCurrView: boolean; theme: ITheme }) =>
      isCurrView
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
`;

export const List = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

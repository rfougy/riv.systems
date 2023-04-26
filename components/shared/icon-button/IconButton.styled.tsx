import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";

export const Button = styled.button`
  all: unset;
  width: 0.75rem;
  height: 0.75rem;
  position: relative;

  img {
    ${(props: any) =>
      props.rotate &&
      `animation: rotation 3s infinite linear; 
      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(-359deg);
        }
      }`}


    -webkit-filter: ${({
      isActive = true,
      isDisabled = false,
      theme,
    }: {
      isActive?: boolean;
      isDisabled?: boolean;
      rotate?: boolean;
      theme: ITheme;
    }) =>
      isDisabled
        ? "invert(0.5)"
        : isActive
        ? theme.id === "light"
          ? "invert(0)"
          : "invert(1)"
        : "invert(0.5)"};

    filter: ${({
      isActive = true,
      isDisabled = false,
      theme,
    }: {
      isActive?: boolean;
      isDisabled?: boolean;
      rotate?: boolean;
      theme: ITheme;
    }) =>
      isDisabled
        ? "invert(0.5)"
        : isActive
        ? theme.id === "light"
          ? "invert(0)"
          : "invert(1)"
        : "invert(0.5)"};

      &:hover {
        "-webkit-filter": ${(props: any) =>
          props.isDisabled
            ? "invert(0.5)"
            : props.theme.id === "light"
            ? "invert(0)"
            : "invert(1)"};
        filter: ${(props: any) =>
          props.isDisabled
            ? "invert(0.5)"
            : props.theme.id === "light"
            ? "invert(0)"
            : "invert(1)"};
      }
  }
`;

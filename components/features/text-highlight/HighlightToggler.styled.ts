import styled from "@emotion/styled";
import { breakpoints, lightTheme } from "../../../styles/theme";

function getBorderAndTextStyles(props: any): string {
  return props.theme.id === "light"
    ? props.theme.primary
    : props.highlighted
    ? props.theme.primary
    : props.theme.primary;
}

export const Button = styled.button`
  all: unset;

  position: sticky;
  position: -webkit-sticky;
  bottom: 2rem;
  right: 100vw;
  z-index: 1;

  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  gap: 0.5rem;

  padding: 0.25rem;
  margin-top: 2rem;
  border: 0.1rem solid ${(props: any) => getBorderAndTextStyles(props)};
  border-radius: 3rem;

  background-color: ${(props: any) =>
    props.highlighted
      ? props.theme.id === "light"
        ? "rgba(255, 255, 255, 0.3)"
        : "rgba(0, 0, 0, 0.3)"
      : props.theme.yellow};
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(2.5px);

  @media (max-width: ${breakpoints.md}) {
    right: 0;
  }
`;

export const Toggle = styled.div`
  display: flex;

  flex-direction: ${({ highlighted }: { highlighted: boolean }) =>
    highlighted ? "row-reverse" : "row"};
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-between;

  padding: 0;
  width: 2.5rem;

  background-color: ${(props: any) =>
    props.highlighted ? props.theme.yellow : props.theme.secondary};
  border: 0.1rem solid ${(props: any) => getBorderAndTextStyles(props)};
  border-radius: 3rem;
`;

export const Circle = styled.div`
  height: 0.75rem;
  width: 0.75rem;
  margin: 0.1rem;

  background: ${(props: any) => props.theme.primary};
  border-radius: 50%;
`;

export const Title = styled.h6`
  color: ${(props: any) => getBorderAndTextStyles(props)};
  background-color: none;
  margin: 0;
  padding: 0 0 0 0.5rem;
`;

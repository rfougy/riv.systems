import styled from "@emotion/styled";
import { breakpoints } from "../../../../styles/theme";

export const Box = styled.button`
  align-items: center;
  background-color: ${(props: any) =>
    props.theme.id === "light"
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(0, 0, 0, 0.3)"};
  border: 0.1rem solid ${(props: any) => props.theme.primary};
  border-radius: 3vh;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  padding: 0;
  gap: 0.6rem;
  width: max-content;
  padding: 0.1rem 0.6rem;
`;

export const Title = styled.h6`
  color: ${(props: any) => props.theme.primary};
  background-color: none;
  margin: 0;
`;

// Dropdown

export const Dropdown = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: max-content;
  top: 3.75rem;

  @media (max-width: ${breakpoints.xs}) {
    gap: 1rem;
    top: 4.5rem;
  }
`;

export const PlaylistOption = styled.li`
  all: unset;
  align-items: center;
  background-color: ${(props: any) =>
    props.theme.id === "light"
      ? "rgba(255, 255, 255, 0.3)"
      : "rgba(0, 0, 0, 0.3)"};
  border: 0.1rem solid ${(props: any) => props.theme.primary};
  border-radius: 3vh;
  display: flex;
  flex-wrap: no-wrap;
  padding: 0;
  width: max-content;
  padding: 0.1rem 0.6rem;
`;

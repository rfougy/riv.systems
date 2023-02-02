import styled from "@emotion/styled";
import { lightTheme } from "../../../styles/Themes";

export const Button = styled.button`
  all: unset;
  opacity: 0.75;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;

  background-color: ${lightTheme.primary};

  &:hover {
    opacity: 1;
  }
`;

export const List = styled.ol`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: end;
`;

export const Navigation = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  flex-wrap: no-wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.5rem;
`;

export const Container = styled.div`
  position: relative;
`;

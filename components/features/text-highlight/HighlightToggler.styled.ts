import styled from "@emotion/styled";
import { lightTheme } from "../../../styles/theme";

export const Box = styled.div`
  position: sticky;
  position: -webkit-sticky;
  bottom: 2rem;
  z-index: 10;

  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  gap: 1rem;

  padding: 0.5rem;
  margin-top: 2rem;
  border: 0.1rem solid ${lightTheme.primary};
  border-radius: 3rem;

  background-color: yellow;
`;

export const Toggle = styled.button`
  display: flex;

  flex-direction: ${({ highlighted }: { highlighted: boolean }) =>
    highlighted ? "row-reverse" : "row"};
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: space-between;

  padding: 0;
  width: 2.5rem;

  background-color: ${lightTheme.secondary};
  border: 0.1rem solid ${lightTheme.primary};
  border-radius: 3vh;
`;

export const Circle = styled.div`
  height: 0.75rem;
  width: 0.75rem;
  margin: 0.1rem;

  background: ${lightTheme.primary};
  border-radius: 50%;
`;

export const Title = styled.h6`
  color: ${lightTheme.primary};
  background-color: none;
  margin: 0;
`;

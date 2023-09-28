import { breakpoints } from "../../../styles/theme";
import styled from "@emotion/styled";

export const Box = styled.section`
  padding: 1.25rem;
  margin-top: 1.75rem;

  border-radius: 1vh;
  background-color: ${(props: any) => props.theme.highlight};
`;
export const Grid = styled.section`
  display: grid;
  gap: 1rem;
  align-items: start;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
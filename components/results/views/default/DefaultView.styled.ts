import { breakpoints } from "../../../../styles/theme";
import styled from "@emotion/styled";

export const Grid = styled.section`
  display: grid;
  gap: 2rem 1rem;
  align-items: start;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GridItem = styled.div`
  display: flex;

  a {
    width: 100%;
  }
`;

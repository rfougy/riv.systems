import styled from "@emotion/styled";

export const Grid = styled.section`
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 40em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

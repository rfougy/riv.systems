import styled from "@emotion/styled";

export const Grid = styled.section`
  display: grid;
  gap: 2rem 1rem;

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 40em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 60em) {
    grid-template-columns: ${({ numOfItems }: { numOfItems: number }) =>
      numOfItems < 3 ? `repeat(${numOfItems}, 1fr)` : "repeat(3, 1fr)"};
  }
`;

import styled from "@emotion/styled";

export const PageTitle = styled.h1`
  text-align: start;
  width: 100%;
  margin-top: 0;
  margin-bottom: 3rem;

  @media (max-width: 40em) {
    margin-bottom: 1rem;
  }
`;

export const FilterAndGridContainer = styled.div`
  display: flex;
  gap: 6rem;

  @media (max-width: 40em) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const FilterContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

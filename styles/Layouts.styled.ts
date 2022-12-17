import styled from "@emotion/styled";

export const PageTitle = styled.h1`
  text-align: start;
  width: 100%;
  margin: 0;
`;

export const FilterAndGridContainer = styled.div`
  display: flex;
  gap: 6rem;

  @media (max-width: 40em) {
    flex-direction: column;
    gap: 3rem;
    width: 100%;
  }
`;

export const CategoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 40em) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
`;

export const FilterContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

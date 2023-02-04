import styled from "@emotion/styled";

export const PageTitle = styled.h1`
  text-align: start;
  width: 100%;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  gap: 6rem;

  @media (max-width: 40em) {
    flex-direction: column;
    gap: 3rem;
    width: 100%;
  }
`;

export const ViewSection = styled.section``;

export const CategoryResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
`;

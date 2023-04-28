import { breakpoints } from "./../../styles/theme";
import styled from "@emotion/styled";

export const PageTitle = styled.h1`
  line-height: 100%;
  text-align: start;

  width: 100%;
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6rem;
  width: 100%;

  @media (max-width: ${breakpoints.xs}) {
    flex-direction: column;
    gap: 3rem;
    width: 100%;
  }
`;

export const ViewSection = styled.section``;

export const EmptyContainer = styled.div`
  width: 117px;
`;

export const CategoryResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const FilterSection = styled.section`
  @media (min-width: ${breakpoints.xs}) {
    display: flex;
    flex-direction: column;
    align-self: flex-start;

    position: -webkit-sticky;
    position: sticky;
    top: 4.75rem;
  }
`;

export const TitleAndToggle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${breakpoints.xs}) {
    flex-direction: row;
    align-items: end;
  }
`;

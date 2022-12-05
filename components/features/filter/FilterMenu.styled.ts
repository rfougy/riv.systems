import styled from "@emotion/styled";

export const Title = styled.h3`
  font-size: 1rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div``;

export const FilterSet = styled.div``;

export const FilterOption = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  padding: ${({ isCategoryFilter }: { isCategoryFilter?: boolean }) =>
    isCategoryFilter ? "0.05rem 0" : "0.5rem 0"};
  margin-left: ${({
    isCategoryFilter,
    onlyCategoryFilters,
  }: {
    isCategoryFilter?: boolean;
    onlyCategoryFilters?: boolean;
  }) => (isCategoryFilter && !onlyCategoryFilters ? "1rem" : 0)};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 40em) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const Checkbox = styled.input`
  background-color: red;
`;

export const Label = styled.label`
  font-size: 0.7rem;
`;

export const Button = styled.button`
  font-size: 0.7rem;
  font-weight: 500;
  color: #9c9c9c;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  margin-left: 1rem;
`;

import styled from "@emotion/styled";

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
  margin-bottom: 2rem;
`;

export const Checkbox = styled.input`
  background-color: red;
`;

export const Title = styled.label`
  font-size: 0.7rem;
`;

export const Button = styled.button`
  font-size: 0.7rem;
  color: #000000;
  background-color: transparent;
  border: solid;

  padding: 0.25rem 0.5rem;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
  }
`;

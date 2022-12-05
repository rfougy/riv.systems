import styled from "@emotion/styled";

export const Title = styled.h3`
  font-size: 1rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  margin: 1rem 0;
`;

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
`;

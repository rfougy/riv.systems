import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 1rem;
`;

export const FilterSet = styled.div`
  margin-top: 1rem;
`;

/**
 * @description custom checked and unchecked checkbox
 * @see https://moderncss.dev/pure-css-custom-checkbox-style/
 */
export const FilterOption = styled.label`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  padding: ${({ isCategoryFilter }: { isCategoryFilter?: boolean }) =>
    isCategoryFilter ? "0.1rem 0" : "0.5rem 0"};
  margin-left: ${({
    isCategoryFilter,
    onlyCategoryFilters,
  }: {
    isCategoryFilter?: boolean;
    onlyCategoryFilters?: boolean;
  }) => (isCategoryFilter && !onlyCategoryFilters ? "0rem" : 0)};

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    margin: 0 0.5rem 0 0;

    display: grid;
    place-content: center;

    color: ${(props: any) => props.theme.primary};
    width: 0.7rem;
    height: 0.7rem;
    border: 0.075rem solid;
    border-radius: 1rem;
  }

  input[type="checkbox"]:checked {
    background: ${(props: any) => props.theme.primary};
    // outline: 0.075rem solid ${(props: any) => props.theme.secondary};
    // outline-offset: -0.15rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 40em) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0 3rem;
  }
`;

export const Checkbox = styled.input``;

export const Label = styled.h3`
  font-size: 0.7rem;
  font-weight: 400;
  margin: 0;
`;

export const SectionTitle = styled.h2`
  font-size: 0.7rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
`;

import { breakpoints } from "./../../../styles/theme";
import styled from "@emotion/styled";

export const Box = styled.div`
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
  align-items: center;
  display: flex;
  flex-wrap: no-wrap;
  margin-left: ${({
    isCategoryFilter,
    onlyCategoryFilters,
  }: {
    isCategoryFilter?: boolean;
    onlyCategoryFilters?: boolean;
  }) => (isCategoryFilter && !onlyCategoryFilters ? "0rem" : 0)};
  padding: ${({ isCategoryFilter }: { isCategoryFilter?: boolean }) =>
    isCategoryFilter ? "0.1rem 0" : "0.5rem 0"};

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    border: 0.075rem solid;
    border-radius: 1rem;
    color: ${(props: any) => props.theme.primary};
    display: grid;
    height: 0.7rem;
    margin: 0 0.5rem 0 0;
    place-content: center;
    width: 0.7rem;
  }

  input[type="checkbox"]:checked {
    background: ${(props: any) => props.theme.primary};
  }
`;

export const SectionFilterOption = styled(FilterOption)`
  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    border: 0.075rem solid;
    border-radius: 1rem;
    color: ${(props: any) => props.theme.primary};
    display: grid;
    height: 0.4rem;
    margin: 0 0.5rem 0 0;
    padding: 0.15rem 0.4rem;
    place-content: center;
    position: relative;
    width: 0.9rem;
  }

  input[type="checkbox"]::after {
    background-color: ${(props: any) => props.theme.primary};
    border-radius: 1.5rem;
    content: "";
    height: 0.2rem;
    left: 30%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0.35rem;
  }

  input[type="checkbox"]:checked {
    background: none;
  }

  input[type="checkbox"]:checked::after {
    left: 70%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.xs}) {
    display: grid;
    gap: 0 3rem;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Checkbox = styled.input``;

export const ToggleCheckbox = styled.input``;

export const Label = styled.h3`
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0;
`;

export const SectionTitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  margin-right: 0.5rem;
`;

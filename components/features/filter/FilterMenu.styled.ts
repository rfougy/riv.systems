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

export const Title = styled.label`
  font-size: 0.7rem;
`;

export const SocialsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 0 0 auto;
`;

export const SocialsLink = styled.li`
  display: inline-block;
  padding: 0 0.75rem;
`;

import styled from "@emotion/styled";

/**
 * @description ContentWrap calculates the height based off the height of navbar and footer.
 * @see https://stackoverflow.com/a/37370197
 */
export const ContentWrap = styled.div`
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  align-items: center;
  justify-content: center;

  padding: 2.5rem 0;

  margin: 0;

  min-height: calc(100vh - (5rem + 3.375rem));

  @media (max-width: 40em) {
    padding: 2rem 0 3rem 0;
    min-height: calc(100vh - (4rem + 2.375rem));
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100%;
  margin: 2rem;

  cursor: crosshair;
  &:hover label {
    cursor: crosshair;
  }
  &:hover button,
  a,
  input {
    cursor: cell;
  }
  &:hover p {
    cursor: text;
  }

  @media (max-width: 40em) {
    margin: 1rem;
  }
`;

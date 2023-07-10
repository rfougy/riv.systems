import { breakpoints } from "./../theme";
import styled from "@emotion/styled";

const navbarHeight = "2.75rem";
const footerHeight = "2.75rem";

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
  justify-content: ${({ isDisplayDotsPage }: { isDisplayDotsPage: boolean }) =>
    isDisplayDotsPage ? "center" : "start"};

  margin: 0;
  padding: ${({
    isDisplayDotsPage,
    isLinkInBioPage,
  }: {
    isDisplayDotsPage: boolean;
    isLinkInBioPage: boolean;
  }) =>
    isLinkInBioPage ? "0" : isDisplayDotsPage ? "2rem 0" : "2rem 0 4rem 0"};

  min-height: calc(100dvh - (${navbarHeight} + ${footerHeight}));
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  margin: ${({ isLinkInBioPage }: { isLinkInBioPage: boolean }) =>
    isLinkInBioPage ? "0" : "0 2rem 1.25rem 2rem"};

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

  @media (max-width: ${breakpoints.xs}) {
    margin: 0 1rem 1rem 1rem;
  }
`;

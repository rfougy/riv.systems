import { breakpoints } from "./../../styles/theme";
import styled from "@emotion/styled";

export const Footer = styled.footer`
  display: flex;
  height: 1.375rem
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${breakpoints.xxs}) {
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const SocialsList = styled.ul`
  list-style-type: none;

  display: flex;
  gap: 1.5rem;
  padding: 0;

  @media (max-width: ${breakpoints.xxs}) {
    margin: auto;
  }
`;

export const SocialsLink = styled.li`
  display: inline-block;

  @media (max-width: ${breakpoints.xxs}) {
    margin: auto;
  }
`;

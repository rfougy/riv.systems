import { breakpoints } from "./../../styles/theme";
import styled from "@emotion/styled";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  height: 1.375rem
  justify-content: end;
`;

export const SocialsList = styled.ul`
  list-style-type: none;
  margin: 0 0 0 auto;
  padding: 0;

  @media (max-width: ${breakpoints.xs}) {
    margin: 0 auto;
  }
`;

export const SocialsLink = styled.li`
  display: inline-block;
  padding: 0 0.75rem;
`;

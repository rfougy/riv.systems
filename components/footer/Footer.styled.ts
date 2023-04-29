import styled from "@emotion/styled";

export const Footer = styled.footer`
  display: flex;
  height: 1.375rem
  width: 100%;
  justify-content: space-between;
`;

export const SocialsList = styled.ul`
  list-style-type: none;

  display: flex;
  gap: 1.5rem;
  padding: 0;
`;

export const SocialsLink = styled.li`
  display: inline-block;

  * {
    height: 1rem;
    width: 1rem;
  }
`;

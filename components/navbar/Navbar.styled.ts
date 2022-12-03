import styled from "@emotion/styled";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const MenuItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: inline-block;
  padding: 0 0.75rem;

  & > a: {
  }
`;

export const Anchor = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

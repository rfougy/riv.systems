import styled from "@emotion/styled";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MenuOption = styled.li`
  display: inline-block;
  padding: 0 0.75rem;
`;

export const A = styled.a`
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

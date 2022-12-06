import styled from "@emotion/styled";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const NavMenu = styled.ul`
  display: grid;
  gap: 0rem 2rem;

  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 40em) {
    gap: 0;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MenuOption = styled.li`
  display: flex;
  justify-content: center;
  justify-self: start;
`;

export const A = styled.a`
  font-weight: 500;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ThemeTest = styled.div`
  background-color: ${(props: any) => props.theme.color};
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 3.5rem;
`;

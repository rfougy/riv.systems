import styled from "@emotion/styled";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  height: 3rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 10rem;
  height: 3rem;

  @media (max-width: 40em) {
    width: 9.5rem;
  }
`;

export const NavMenu = styled.ul`
  display: grid;
  gap: 0rem 2rem;
  height: 100%;

  grid-template-columns: ${({ numOfSections }: { numOfSections: number }) =>
    `repeat(${numOfSections + 1}, 1fr)`};
  @media (max-width: 40em) {
    gap: 0;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MenuOption = styled.li`
  display: flex;
  justify-content: center;
  justify-self: start;

  @media (max-width: 40em) {
    justify-self: end;
  }
`;

export const A = styled.a`
  text-decoration: none;
  font-weight: ${({
    isActiveOption,
    isHoveredOption,
    hoverIsActive,
    userInHomePage,
  }: {
    isActiveOption?: boolean;
    isHoveredOption?: boolean;
    hoverIsActive?: boolean;
    userInHomePage?: boolean;
  }) => {
    if (
      (isActiveOption && !isHoveredOption) ||
      (userInHomePage && hoverIsActive)
    )
      return 400;
    if (isActiveOption || isHoveredOption) return 700;
  }};
  opacity: ${({
    isActiveOption,
    isHoveredOption,
    hoverIsActive,
    userInHomePage,
    optionIsLogo,
  }: {
    isActiveOption?: boolean;
    isHoveredOption?: boolean;
    hoverIsActive?: boolean;
    userInHomePage?: boolean;
    optionIsLogo?: boolean;
  }) => {
    if (
      (isActiveOption && !isHoveredOption) ||
      (userInHomePage && hoverIsActive)
    )
      return 0.5;
    if ((isActiveOption && isHoveredOption) || userInHomePage || optionIsLogo)
      return 1;

    return 0.5;
  }};

  &:hover {
    font-weight: 700;
    opacity: 1;
  }
`;

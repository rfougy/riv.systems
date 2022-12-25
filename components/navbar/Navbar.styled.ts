import styled from "@emotion/styled";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  height: 100%;
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
  display: flex;
  gap: 0 2rem;
  height: 100%;
  justify-content: end;

  @media (max-width: 40em) {
    flex-direction: column;
    align-items: end;
  }
`;

export const MenuOption = styled.li`
  display: flex;
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

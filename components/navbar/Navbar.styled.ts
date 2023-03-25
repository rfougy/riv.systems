import styled from "@emotion/styled";

export const Nav = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1;
  padding: 0.75rem 2rem;

  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-bottom: ${(props: any) =>
    props.theme.id === "light"
      ? "0.1rem solid rgba(0, 0, 0, 1)"
      : "0.1rem solid rgba(255, 255, 255, 1)"};

  cursor: crosshair;
  &:hover button,
  a {
    cursor: cell;
  }

  @media (max-width: 40em) {
    padding: 1rem;
    align-items: start;
    border-width: 0.075rem;

    backdrop-filter: blur(6px);
  }
`;

export const LogoAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 40em) {
    gap: 1rem;
  }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
  gap: 0.75rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 0 2rem;
  height: 100%;
  justify-content: end;

  @media (max-width: 40em) {
    gap: 1rem;
  }
`;

export const MenuOption = styled.li`
  display: flex;
`;

export const A = styled.a`
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
  text-decoration: none;

  &:hover {
    font-weight: 700;
    opacity: 1;
  }
`;

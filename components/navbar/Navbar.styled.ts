import styled from "@emotion/styled";

export const Nav = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1;
  padding: 1.25rem 2rem;

  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-bottom: ${(props: any) =>
    props.theme.id === "light"
      ? "0.1rem solid rgba(0, 0, 0, 1)"
      : "0.1rem solid rgba(255, 255, 255, 1)"};

  @media (max-width: 40em) {
    padding: 1rem;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 3rem;
  justify-content: space-between;
  width: 10rem;

  @media (max-width: 40em) {
    width: 9.5rem;
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
    align-items: end;
    flex-direction: column;
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

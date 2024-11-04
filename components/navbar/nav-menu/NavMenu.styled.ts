import { breakpoints } from "./../../../styles/theme";
import styled from "@emotion/styled";

export const Box = styled.ul`
  display: flex;
  gap: 0 2rem;
  height: 100%;
  justify-content: end;

  @media (max-width: ${breakpoints.xs}) {
    gap: 1rem;
  }
`;

export const MenuOption = styled.li`
  display: flex;

  &:nth-last-child(2)::after {
    content: "";
    display: inline-block;
    width: 1px;
    background-color: ${(props: any) => props.theme.primary};
    opacity: 0.5;
    margin-left: 2rem;
  }

  @media (max-width: ${breakpoints.xs}) {
    &:nth-last-child(2)::after {
      content: "";
      display: inline-block;
      width: 1px;
      background-color: ${(props: any) => props.theme.primary};
      opacity: 0.5;
      margin-left: 1rem;
    }
  }
`;

export const Text = styled.p`
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
  margin: 0;

  &:hover {
    font-weight: 700;
    opacity: 1;
  }
`;

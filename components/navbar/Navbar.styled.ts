import { breakpoints } from "./../../styles/theme";
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

  @media (max-width: ${breakpoints.xs}) {
    padding: 1rem;
    align-items: center;
    border-width: 0.075rem;

    backdrop-filter: blur(6px);
  }
`;

export const LogoAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: ${breakpoints.xs}) {
    gap: 1rem;
  }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
  gap: 0.75rem;
`;

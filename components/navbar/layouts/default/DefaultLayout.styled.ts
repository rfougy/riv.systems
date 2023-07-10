import { breakpoints } from "../../../../styles/theme";
import styled from "@emotion/styled";

export const LogoAndButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  height: 1.344rem;

  @media (max-width: ${breakpoints.xs}) {
    gap: 1rem;
  }
`;

export const FeaturesBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
  gap: 0.75rem;
`;

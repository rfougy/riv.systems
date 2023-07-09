import styled from "@emotion/styled";
import { breakpoints } from "../../styles/theme";

export const Footer = styled.footer`
  display: flex;
  height: 1.375rem
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${breakpoints.xxs}) {
    justify-content: center;
    gap: 1.5rem;
  }
`;

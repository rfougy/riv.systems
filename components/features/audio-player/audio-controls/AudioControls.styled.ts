import styled from "@emotion/styled";
import { breakpoints } from "../../../../styles/theme";

export const List = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  gap: 0.5rem;

  @media (max-width: ${breakpoints.xs}) {
    display: none;
  }
`;

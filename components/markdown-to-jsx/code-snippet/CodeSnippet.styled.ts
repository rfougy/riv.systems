import styled from "@emotion/styled";
import { breakpoints } from "../../../styles/theme";

export const Box = styled.div`
  position: relative;
  width: 100%;

  pre {
    text-wrap: balance;
    font-size: 0.875rem;
  }

  code {
    background-color: white;
  }

  @media (max-width: ${breakpoints.xs}) {
    pre {
      text-wrap: wrap;
    }
  }
`;

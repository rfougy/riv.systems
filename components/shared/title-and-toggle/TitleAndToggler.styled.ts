import { breakpoints } from "./../../../styles/theme";
import styled from "@emotion/styled";

export const PageTitle = styled.h1`
  line-height: 100%;
  text-align: start;

  width: 100%;
  margin: 0;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${breakpoints.xs}) {
    flex-direction: row;
    align-items: end;
  }
`;

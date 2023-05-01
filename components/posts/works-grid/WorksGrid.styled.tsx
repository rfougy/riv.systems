import { breakpoints } from "../../../styles/theme";
import styled from "@emotion/styled";

export const Grid = styled.section`
  display: grid;
  gap: 1rem;
  align-items: start;
  grid-template-columns: repeat(3, 1fr);

  padding: 1.5rem;
  margin-top: 1.75rem;

  border: 0.1rem solid ${(props: any) => props.theme.primary};
  border-radius: 3vh;

  @media (max-width: ${breakpoints.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

import styled from "@emotion/styled";

export const List = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  gap: 0.5rem;

  @media (max-width: 40em) {
    display: none;
  }
`;

import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  border: 0.1rem solid ${(props: any) => props.theme.primary};
  border-radius: 5vh;

  padding: 0.5rem 1rem;
`;

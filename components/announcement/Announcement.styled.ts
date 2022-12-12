import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 2rem;
  padding: 0.5rem 1rem;

  background-color: ${(props: any) => props.theme.primary};
`;

export const Text = styled.p`
  color: ${(props: any) => props.theme.secondary};
  text-align: center;
  margin: 0;
`;

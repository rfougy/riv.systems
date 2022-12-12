import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;

  background-color: ${(props: any) => props.theme.primary};
`;

export const Text = styled.p`
  color: ${(props: any) => props.theme.secondary};
  text-align: center;
  margin: 0;
`;

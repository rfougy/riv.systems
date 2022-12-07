import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

export const Description = styled.p`
  text-align: center;
`;

export const Margin = styled.div`
  margin: 2rem 0;
`;

export const Button = styled.button`
  border: none;
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: ${(props: any) => props.theme.primary};
  color: ${(props: any) => props.theme.secondary};
`;

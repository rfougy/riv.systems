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
  border: 0.1rem solid ${(props: any) => props.theme.primary};
  border-radius: 25rem;

  padding: 0.5rem 1rem;
  margin-top: 1rem;
  color: ${(props: any) => props.theme.primary};
  background-color: ${(props: any) =>
    props.theme.id === "light" ? props.theme.secondary : "none"};

  &:hover {
    color: ${(props: any) =>
      props.theme.id === "light" ? props.theme.secondary : "none"};
    background-color: ${(props: any) =>
      props.theme.id === "light" ? props.theme.primary : "#2D2D2D"};
  }
`;

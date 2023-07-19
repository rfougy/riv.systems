import styled from "@emotion/styled";

export const Button = styled.button`
  border: 0rem solid transparent;
  border-radius: 5vh;

  padding: 0.5rem 1rem;
  color: ${(props: any) => props.theme.primary};
  background-color: ${(props: any) => props.theme.highlight};

  &:hover {
    color: ${(props: any) =>
      props.theme.id === "light" ? props.theme.secondary : "none"};
    background-color: ${(props: any) =>
      props.theme.id === "light" ? props.theme.primary : "#2D2D2D"};
  }
`;

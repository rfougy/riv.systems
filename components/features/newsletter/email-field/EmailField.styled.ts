import styled from "@emotion/styled";

export const Input = styled.input`
  all: unset;
  cursor: cell;

  color: ${(props: any) => props.theme.primary};
  width: 100%;
`;

export const Form = styled.form`
  width: 90%;
`;

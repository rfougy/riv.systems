import styled from "@emotion/styled";

export const Container = styled.div`
  border: solid ${(props: any) => props.theme.primary};
  border-width: 0 0.075rem 0.075rem 0;
  display: inline-block;
  padding: 0.125rem;

  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

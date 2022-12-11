import styled from "@emotion/styled";

export const Container = styled.a`
  overflow: hidden;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  width: 100%;

  margin: auto;
  border: solid 0.1rem;
  border-radius: 5%;

  background: ${(props: any) => props.theme.idle};

  &:hover {
    text-decoration: underline;
    background: ${(props: any) => props.theme.highlight};
  }

  @media (max-width: 40em) {
    border: solid 0.075rem;
    border-radius: 7.5%;
  }
`;

export const Text = styled.div`
  border-top: solid 0.1rem;
  padding: 1rem;

  @media (max-width: 40em) {
    border-top: : solid 0.075rem;    
  }
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const Metadata = styled.div``;

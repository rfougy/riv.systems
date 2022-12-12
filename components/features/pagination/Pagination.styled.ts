import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 4rem;
`;

export const PageNav = styled.nav`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  // border: none;
  border: solid 0.1rem ${(props: any) => props.theme.primary};
  border-radius: 1.45vh;
  padding: 0.05rem 0.7rem;
  margin: 0 0.35rem;

  &:hover {
    background: ${(props: any) => props.theme.highlight};
  }
`;

export const PageNumber = styled.p`
  text-align: center;
  margin: 0 1rem;
`;

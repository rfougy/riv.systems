import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 4rem;
  border: solid ${(props: any) => props.theme.primary};
  max-width: 15rem;
  margin: 4rem auto 0 auto;
  padding: 0.25rem;

  border-radius: 5vh;
`;

export const PageNav = styled.nav`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PageNumber = styled.p`
  margin: 0 1rem;
`;

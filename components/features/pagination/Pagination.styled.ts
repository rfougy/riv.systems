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
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PageNumber = styled.p`
  margin: 0 1rem;
`;

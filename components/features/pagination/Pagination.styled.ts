import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 2rem;
`;

export const PageNav = styled.nav`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  color: #000000;
  background-color: transparent;
  border: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PageNumber = styled.p`
  margin: 0 1rem;
`;

import styled from "@emotion/styled";

export const Container = styled.a`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;

  &:hover {
    text-decoration: underline;
  }
`;

export const Metadata = styled.div`
  margin: none;
`;

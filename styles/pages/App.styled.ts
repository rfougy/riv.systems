import styled from "@emotion/styled";

export const ContentWrap = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  align-items: center;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  margin: 2rem;

  cursor: crosshair;
  &:hover label {
    cursor: crosshair;
  }
  &:hover button,
  a,
  input {
    cursor: cell;
  }
  &:hover p {
    cursor: text;
  }
`;

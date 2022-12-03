import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: ${({ width }: { width: number }) => `${width}rem`}
  margin: none;
`;

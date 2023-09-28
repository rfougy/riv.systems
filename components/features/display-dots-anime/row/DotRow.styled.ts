import styled from "@emotion/styled";

export const Box = styled.div`
  display: flex;
  width: ${({ width }: { width: number }) => `${width}rem`}
  margin: none;
`;

import styled from "@emotion/styled";

export const Dot = styled.div`
  display: "inline-block";
  background: ${({ isDeactivated }: { isDeactivated: boolean }) =>
    isDeactivated ? "#000000" : "#ffffff"};
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.25rem;
`;

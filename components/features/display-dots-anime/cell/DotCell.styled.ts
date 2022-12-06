import styled from "@emotion/styled";

export const Dot = styled.div`
  display: inline-block;
  background: ${(props: any) => props.theme.primary};
  border-radius: 50%;
  width: 0.5rem;
  opacity: ${({ isDeactivated }: { isDeactivated: boolean }) =>
    isDeactivated ? 0 : 1};
  height: 0.5rem;
  margin: 0.1rem;
`;

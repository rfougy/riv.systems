import styled from "@emotion/styled";

export const Dot = styled.div`
  display: inline-block;
  background: ${(props: any) => props.theme.primary};
  height: 0.5rem;
  width: 0.5rem;
  margin: 0.1rem;
  border-radius: 50%;
  opacity: ${({ isDeactivated }: { isDeactivated: boolean }) =>
    isDeactivated ? 0 : 1};

  @media (max-width: 40em) {
    height: 0.25rem;
    width: 0.25rem;
    margin: 0.05rem;
  }
`;

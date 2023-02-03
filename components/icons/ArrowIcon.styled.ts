import styled from "@emotion/styled";

export const ArrowIcon = styled.div`
  border: solid ${(props: any) => props.theme.primary};
  border-width: 0 0.075rem 0.075rem 0;
  padding: 0.125rem;

  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

  transform: ${({ left, right }: { left?: boolean; right?: boolean }) => {
    if (left) return "rotate(-45deg);";
    if (right) return "rotate(135deg);";
  }};

  -webkit-transform: ${({
    left,
    right,
  }: {
    left?: boolean;
    right?: boolean;
  }) => {
    if (left) return "rotate(-45deg);";
    if (right) return "rotate(135deg);";
  }};
`;

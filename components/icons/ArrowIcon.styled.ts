import styled from "@emotion/styled";

export const ArrowIcon = styled.div`
  border: solid ${(props: any) => props.theme.primary};
  border-width: 0 0.075rem 0.075rem 0;
  padding: 0.125rem;

  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);

  transform: ${({
    right,
    left,
    top,
    bottom,
  }: {
    right?: boolean;
    left?: boolean;
    top?: boolean;
    bottom?: boolean;
  }) => {
    if (right) return "rotate(-45deg);";
    if (left) return "rotate(135deg);";
    if (top) return "rotate(0deg);";
    if (bottom) return "rotate(90deg);";
  }};

  -webkit-transform: ${({
    right,
    left,
    top,
    bottom,
  }: {
    right?: boolean;
    left?: boolean;
    top?: boolean;
    bottom?: boolean;
  }) => {
    if (right) return "rotate(-45deg);";
    if (left) return "rotate(135deg);";
    if (top) return "rotate(0deg);";
    if (bottom) return "rotate(90deg);";
  }};
`;

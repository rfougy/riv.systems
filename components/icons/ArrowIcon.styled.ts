import styled from "@emotion/styled";

type ArrowDirectionProps = {
  right?: boolean;
  left?: boolean;
  top?: boolean;
  bottom?: boolean;
  color?: string;
};

const getRotation = ({ right, left, top, bottom }: ArrowDirectionProps) => {
  if (right) return "rotate(-45deg)";
  if (left) return "rotate(135deg)";
  if (top) return "rotate(45deg)";
  if (bottom) return "rotate(-135deg)";

  return "rotate(-45deg)";
};

export const ArrowIcon = styled.div<ArrowDirectionProps>`
  display: inline-block;
  color: ${({ color, theme }) => color ?? (theme as any).primary};
  border: solid currentColor;
  border-width: 0 0.075rem 0.075rem 0;
  padding: 0.125rem;

  transform: ${({ right, left, top, bottom }) =>
    getRotation({ right, left, top, bottom })};
  -webkit-transform: ${({ right, left, top, bottom }) =>
    getRotation({ right, left, top, bottom })};
`;

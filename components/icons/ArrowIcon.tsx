import { ArrowIcon as Icon } from "./ArrowIcon.styled";

const ArrowIcon: React.FC<{
  right?: boolean;
  left?: boolean;
  top?: boolean;
  bottom?: boolean;
  color?: string;
}> = ({ right, left, top, bottom, color }) => (
  <Icon right={right} left={left} top={top} bottom={bottom} color={color} />
);

export default ArrowIcon;

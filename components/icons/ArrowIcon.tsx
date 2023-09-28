import { ArrowIcon as Icon } from "./ArrowIcon.styled";

const ArrowIcon: React.FC<{
  right?: boolean;
  left?: boolean;
  top?: boolean;
  bottom?: boolean;
}> = ({ right, left, top, bottom }) => (
  <Icon right={right} left={left} top={top} bottom={bottom} />
);

export default ArrowIcon;

import { ArrowIcon as Icon } from "./ArrowIcon.styled";

const ArrowIcon: React.FC<{ right?: boolean; left?: boolean }> = ({
  right,
  left,
}) => <Icon right={right} left={left} />;

export default ArrowIcon;

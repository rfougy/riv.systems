import { ArrowIcon as Icon } from "./ArrowIcon.styled";

const ArrowIcon: React.FC<{ left?: boolean; right?: boolean }> = ({
  left,
  right,
}) => {
  return <Icon left right />;
};

export default ArrowIcon;

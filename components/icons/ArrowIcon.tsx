import { Container } from "./ArrowIcon.styled";

const ArrowIcon: React.FC<{ left?: boolean; right?: boolean }> = ({
  left,
  right,
}) => {
  return <Container left={left} right={right} />;
};

export default ArrowIcon;

import { Container } from "./ArrowIcon.styled";

const ArrowIcon: React.FC<{ left?: boolean; right?: boolean }> = ({
  left,
  right,
}) => {
  return <Container aria-label="Arrow Icon" left={left} right={right} />;
};

export default ArrowIcon;

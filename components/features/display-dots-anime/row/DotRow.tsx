import DotCell from "../cell/DotCell";
import { Container } from "./DotRow.styled";

const DotRow: React.FC<{ coordRow: any }> = ({ coordRow }) => {
  const width: number = coordRow.length;

  return (
    <Container width={width}>
      {coordRow.map((coord: any, index: number) => (
        <DotCell key={index} coord={coord} />
      ))}
    </Container>
  );
};

export default DotRow;

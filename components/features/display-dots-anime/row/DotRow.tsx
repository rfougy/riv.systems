import DotCell from "../cell/DotCell";

import { Container } from "./DotRow.styled";

const DotRow: React.FC<{ coordRow: number[][] }> = ({ coordRow }) => {
  const width: number = coordRow.length;

  return (
    <Container width={width}>
      {coordRow.map((coord: number[], index: number) => (
        <DotCell key={index} coord={coord} />
      ))}
    </Container>
  );
};

export default DotRow;

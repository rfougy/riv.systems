import DotRow from "../row/DotRow";

import { Container } from "./DotChar.styled";

const DotChar: React.FC<{ char: any }> = ({ char }) => {
  const allCoordsByRow = Object.values(char.allCoordsByRow);

  return (
    <Container>
      {allCoordsByRow.map((coordRow: any, index: number) => (
        <DotRow key={index} coordRow={coordRow} />
      ))}
    </Container>
  );
};

export default DotChar;

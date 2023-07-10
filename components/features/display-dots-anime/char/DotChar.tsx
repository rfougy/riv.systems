import DotRow from "../row/DotRow";

import { Box } from "./DotChar.styled";

const DotChar: React.FC<{ char: any }> = ({ char }) => {
  const allCoordsByRow = Object.values(char.allCoordsByRow);

  return (
    <Box>
      {allCoordsByRow.map((coordRow: any, index: number) => (
        <DotRow key={index} coordRow={coordRow} />
      ))}
    </Box>
  );
};

export default DotChar;

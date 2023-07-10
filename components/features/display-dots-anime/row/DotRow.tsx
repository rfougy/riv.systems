import DotCell from "../cell/DotCell";

import { Box } from "./DotRow.styled";

const DotRow: React.FC<{ coordRow: number[][] }> = ({ coordRow }) => {
  const width: number = coordRow.length;

  return (
    <Box width={width}>
      {coordRow.map((coord: number[], index: number) => (
        <DotCell key={index} coord={coord} />
      ))}
    </Box>
  );
};

export default DotRow;

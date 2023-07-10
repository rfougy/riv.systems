import DotChar from "../char/DotChar";

import { Box } from "./DotWord.styled";

const DotWord: React.FC<{ wordOrSpace: any }> = ({ wordOrSpace }) => {
  return (
    <Box>
      {wordOrSpace.map((char: any, index: number) => (
        <DotChar key={index} char={char} />
      ))}
    </Box>
  );
};

export default DotWord;

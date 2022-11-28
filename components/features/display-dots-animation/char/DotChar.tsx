import { useEffect } from "react";
import DotRow from "../row/DotRow";
import * as S from "./DotChar.styled";

const DotChar: React.FC<{ char: any }> = ({ char }) => {
  const allCoordsByRow = Object.values(char.allCoordsByRow);

  useEffect(() => {
    console.log("CHAR: ", char);
  }, []);

  return (
    <S.Container>
      {allCoordsByRow.map((coordRow: any, index: number) => (
        <DotRow key={index} coordRow={coordRow} />
      ))}
    </S.Container>
  );
};

export default DotChar;

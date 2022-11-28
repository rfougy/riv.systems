import DotCell from "../cell/DotCell";
import * as S from "./DotRow.styled";

const DotRow: React.FC<{ coordRow: any }> = ({ coordRow }) => {
  const width: number = coordRow.length;

  return (
    <S.Container width={width}>
      {coordRow.map((coord: any, index: number) => (
        <DotCell key={index} coord={coord} />
      ))}
    </S.Container>
  );
};

export default DotRow;

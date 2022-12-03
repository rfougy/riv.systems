import DotChar from "../char/DotChar";
import * as S from "./DotWord.styled";

const DotWord: React.FC<{ wordOrSpace: any }> = ({ wordOrSpace }) => {
  return (
    <S.Container>
      {wordOrSpace.map((char: any, index: number) => (
        <DotChar key={index} char={char} />
      ))}
    </S.Container>
  );
};

export default DotWord;

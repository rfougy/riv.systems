import DotChar from "../char/DotChar";
import { Container } from "./DotWord.styled";

const DotWord: React.FC<{ wordOrSpace: any }> = ({ wordOrSpace }) => {
  return (
    <Container>
      {wordOrSpace.map((char: any, index: number) => (
        <DotChar key={index} char={char} />
      ))}
    </Container>
  );
};

export default DotWord;

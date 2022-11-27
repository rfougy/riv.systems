import DotChar from "./DotChar";

const DotWord: React.FC<{ wordOrSpace: any }> = ({ wordOrSpace }) => {
  return (
    <div>
      {wordOrSpace.map((char: any, index: number) => (
        <DotChar key={index} char={char} />
      ))}
    </div>
  );
};

export default DotWord;

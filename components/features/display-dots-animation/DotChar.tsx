import { useEffect } from "react";
import DotRow from "./DotRow";

const DotChar: React.FC<{ char: any }> = ({ char }) => {
  const { allCoordsByRow } = char;

  const allCoordsByRowVals = Object.values(allCoordsByRow);

  useEffect(() => {
    console.log("CHAR: ", char);
  }, []);

  return (
    <div>
      {allCoordsByRowVals.map((coordRow: any, index: number) => (
        <DotRow key={index} coordRow={coordRow} />
      ))}
    </div>
  );
};

export default DotChar;

import DotCell from "./DotCell";

const DotRow: React.FC<{ coordRow: any }> = ({ coordRow }) => {
  return (
    <div>
      {coordRow.map((coord: any, index: number) => (
        <DotCell key={index} coord={coord} />
      ))}
    </div>
  );
};

export default DotRow;

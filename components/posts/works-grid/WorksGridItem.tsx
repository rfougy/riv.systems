import { GridItem, Title, Value } from "./WorksGridItem.styled";

const WorksGridItem: React.FC<{
  title: string;
  val: string;
}> = ({ title, val }) => {
  return (
    <GridItem>
      <Title>{title.toUpperCase()}</Title>
      <Value>{val}</Value>
    </GridItem>
  );
};

export default WorksGridItem;

import { useTextHighlightContext } from "../../../context/TextHighlightContext";
import { Toggle, Circle, Title, Button } from "./HighlightToggler.styled";

const HighlightToggler: React.FC = () => {
  const { highlighted, setHighlighted } = useTextHighlightContext();

  function handleToggle() {
    setHighlighted((prev: boolean) => !prev);
  }

  const title = highlighted ? "DISABLE HIGHLIGHTS" : "HIGHLIGHT KEY TEXT";

  return (
    <Button onClick={(): void => handleToggle()}>
      <Title>{title}</Title>
      <Toggle aria-label="Color Theme Toggle" highlighted={highlighted}>
        <Circle />
      </Toggle>
    </Button>
  );
};

export default HighlightToggler;
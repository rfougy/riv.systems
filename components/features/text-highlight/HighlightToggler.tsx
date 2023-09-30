import { useTextHighlightContext } from "../../../context/TextHighlightContext";
import { Toggle, Circle, Title, Box } from "./HighlightToggler.styled";

const HighlightToggler: React.FC = () => {
  const { highlighted, setHighlighted } = useTextHighlightContext();

  function handleToggle() {
    setHighlighted((prev: boolean) => !prev);
  }

  const title = highlighted ? "DISABLE HIGHLIGHTS" : "HIGHLIGHT KEY TEXT";

  return (
    <Box>
      <Title>{title}</Title>
      <Toggle
        aria-label="Color Theme Toggle"
        highlighted={highlighted}
        onClick={(): void => handleToggle()}
      >
        <Circle />
      </Toggle>
    </Box>
  );
};

export default HighlightToggler;

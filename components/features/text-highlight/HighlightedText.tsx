import { useTextHighlightContext } from "../../../context/TextHighlightContext";
import { Text } from "./HighlightedText.styled";

const HighlightedText: React.FC<{ children: any }> = ({ children }) => {
  const { highlighted } = useTextHighlightContext();

  return <Text highlighted={highlighted}>{children}</Text>;
};

export default HighlightedText;

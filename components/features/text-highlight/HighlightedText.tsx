import { useEffect } from "react";
import { useTextHighlightContext } from "../../../context/TextHighlightContext";

const HighlightedText: React.FC<{ children: any }> = ({ children }) => {
  const { highlighted } = useTextHighlightContext();

  useEffect(() => console.log("*highlighted: ", highlighted));

  return <mark>{children}</mark>;
};

export default HighlightedText;

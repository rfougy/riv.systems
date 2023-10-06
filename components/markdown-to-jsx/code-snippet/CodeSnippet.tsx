import { useEffect } from "react";

import hljs from "highlight.js";
import { Box } from "./CodeSnippet.styled";

const CodeSnippet: React.FC<{ children: any }> = ({ children }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <Box>
      <pre>
        <code>{`${children}`}</code>
      </pre>
    </Box>
  );
};

export default CodeSnippet;

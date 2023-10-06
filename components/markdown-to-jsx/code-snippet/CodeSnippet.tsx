import React, { useEffect } from "react";

import hljs from "highlight.js";

const CodeSnippet: React.FC<{ children: any }> = ({ children }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code>{`${children}`}</code>
    </pre>
  );
};

export default CodeSnippet;

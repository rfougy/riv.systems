import { NextPage } from "next";
import { useEffect } from "react";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("css", css);

const Test: NextPage = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className="typescript">
        {`
  const example = 1;
  console.log("test: ", example);
  `}
      </code>
    </pre>
  );
};

export default Test;

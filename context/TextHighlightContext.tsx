import { createContext, useState, useContext } from "react";

export const TextHighlightContext = createContext<any | null>(null);
export const useTextHighlightContext = () => useContext(TextHighlightContext);

const TextHighlightProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [highlighted, setHighlighted] = useState<boolean>(false);

  return (
    <TextHighlightContext.Provider
      value={{
        highlighted,
        setHighlighted,
      }}
    >
      {children}
    </TextHighlightContext.Provider>
  );
};

export default TextHighlightProvider;

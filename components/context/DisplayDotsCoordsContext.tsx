import React, { createContext, useState, useContext } from "react";
import { useInterval } from "../../hooks/useInterval";

export const DisplayDotsCoordsContext = createContext<any | null>(null);
export const useDisplayDotsCoordsContext = () =>
  useContext(DisplayDotsCoordsContext);

const DisplayDotsCoordsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [deactivatedCoords, setDeactivatedCoords] = useState<number[][] | any>(
    []
  );
  const [inactiveCoords, setInactiveCoords] = useState<number[][] | undefined>(
    undefined
  );
  const [inactiveCoordsInContext, setInactiveCoordsIsInContext] =
    useState<boolean>(false);

  function displayDotsAnimeCallback() {
    if (inactiveCoordsInContext && inactiveCoords?.length) {
      const inactiveCoord = inactiveCoords?.pop();

      deactivatedCoords.length
        ? setDeactivatedCoords((prev: number[][]) => [...prev, inactiveCoord])
        : setDeactivatedCoords([inactiveCoord]);
    } else {
      return;
    }
  }

  useInterval(displayDotsAnimeCallback, 20);

  return (
    <DisplayDotsCoordsContext.Provider
      value={{
        deactivatedCoords,
        setInactiveCoords,
        setInactiveCoordsIsInContext,
      }}
    >
      {children}
    </DisplayDotsCoordsContext.Provider>
  );
};

export default DisplayDotsCoordsProvider;

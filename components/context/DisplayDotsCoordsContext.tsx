import React, { createContext, useState, useContext } from "react";
import { useInterval } from "../../hooks/useInterval";

export const DisplayDotsCoordsContext = createContext<any | null>(null);
export const useDisplayDotsCoordsContext = () =>
  useContext(DisplayDotsCoordsContext);

const DisplayDotsCoordsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [deactivatedCoords, setDeactivatedCoords] = useState<
    number[][] | any[]
  >([]);
  const [inactiveCoords, setInactiveCoords] = useState<number[][]>();
  const [inactiveCoordsInContext, setInactiveCoordsIsInContext] =
    useState<boolean>(false);

  function displayDotsAnimeCallback(): void {
    if (inactiveCoordsInContext && inactiveCoords?.length) {
      const inactiveCoord: number[] | undefined = inactiveCoords?.pop();

      deactivatedCoords.length
        ? setDeactivatedCoords((prev: number[][]) => [...prev, inactiveCoord])
        : setDeactivatedCoords([inactiveCoord]);
    } else {
      return;
    }
  }

  useInterval(displayDotsAnimeCallback, 12.5);

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

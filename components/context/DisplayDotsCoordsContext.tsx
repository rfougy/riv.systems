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
  const [animeEnded, setAnimeEnded] = useState<boolean>(false);

  function displayDotsAnimeCallback(restart?: "restart"): void | string {
    console.log("inactiveCoords?.length: ", inactiveCoords?.length);
    if (restart) {
      setDeactivatedCoords([]);
      setAnimeEnded(false);
      return;
    }

    if (inactiveCoords?.length) {
      const inactiveCoord: number[] | undefined = inactiveCoords?.pop();

      deactivatedCoords.length
        ? setDeactivatedCoords((prev: number[][]) => [...prev, inactiveCoord])
        : setDeactivatedCoords([inactiveCoord]);

      return;
    }

    setAnimeEnded(true);
  }

  useInterval(animeEnded, displayDotsAnimeCallback, 12.5);

  return (
    <DisplayDotsCoordsContext.Provider
      value={{
        deactivatedCoords,
        setInactiveCoords,
        setAnimeEnded,
        displayDotsAnimeCallback,
      }}
    >
      {children}
    </DisplayDotsCoordsContext.Provider>
  );
};

export default DisplayDotsCoordsProvider;

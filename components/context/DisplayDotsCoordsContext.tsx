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

  function displayDotsAnimeCallback(): void {
    if (inactiveCoords?.length) {
      const inactiveCoord: number[] | undefined = inactiveCoords?.pop();

      deactivatedCoords.length
        ? setDeactivatedCoords((prev: number[][]) => [...prev, inactiveCoord])
        : setDeactivatedCoords([inactiveCoord]);

      return;
    }

    setAnimeEnded(true);
  }

  function startAnime(inactiveCoords: number[][]) {
    setInactiveCoords(inactiveCoords);
  }

  function resetAnime(inactiveCoords: number[][]) {
    setDeactivatedCoords([]);
    setInactiveCoords(inactiveCoords);
    setAnimeEnded(false);
  }

  useInterval(animeEnded, displayDotsAnimeCallback, 12.5);

  return (
    <DisplayDotsCoordsContext.Provider
      value={{
        deactivatedCoords,
        animeEnded,
        startAnime,
        resetAnime,
      }}
    >
      {children}
    </DisplayDotsCoordsContext.Provider>
  );
};

export default DisplayDotsCoordsProvider;

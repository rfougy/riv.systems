/**
 * Display Dots Animation - Context Provider
 * 
 * Provides animation state management for the display dots animation feature.
 * Manages the deactivation of dots over time using an interval-based animation system.
 * 
 * @module context/DisplayDotsCoordsContext
 */

import { createContext, useState, useContext } from "react";

import { useInterval } from "../hooks/useInterval";

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

  /**
   * Callback function executed at each animation interval.
   * Deactivates one inactive coordinate per interval until all are deactivated.
   */
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

  function restartAnime(inactiveCoords: number[][]) {
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
        restartAnime,
      }}
    >
      {children}
    </DisplayDotsCoordsContext.Provider>
  );
};

export default DisplayDotsCoordsProvider;

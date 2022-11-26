import React, { createContext, useState, useContext } from "react";
import { useInterval } from "../../hooks/useInterval";

export const DisplayDotsCoordsContext = createContext<any | null>(null);
export const useDisplayDotsCoordsContext = () =>
  useContext(DisplayDotsCoordsContext);

const DisplayDotsCoordsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [deactivatedCoords, setDeactivatedCoords] = useState<
    number[][] | undefined
  >(undefined);
  const [inactiveCoords, setInactiveCoords] = useState<number[][] | undefined>(
    undefined
  );
  const [inactiveCoordsInContext, setInactiveCoordsInContext] =
    useState<boolean>(false);

  const [countdown, setCountdown] = useState<number>(5);
  function displayDotsAnimeCallback() {
    if (inactiveCoordsInContext && countdown > 0) {
      setCountdown((prevCountdown) => prevCountdown - 1);
      console.log("COUNTDOWN: ", countdown);
    }
  }

  useInterval(displayDotsAnimeCallback, 1000);

  return (
    <DisplayDotsCoordsContext.Provider
      value={{
        inactiveCoords,
        deactivatedCoords,
        setInactiveCoords,
        setDeactivatedCoords,
        setInactiveCoordsInContext,
      }}
    >
      {children}
    </DisplayDotsCoordsContext.Provider>
  );
};

export default DisplayDotsCoordsProvider;

import React, { createContext, useState, useEffect, useContext } from "react";

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

  const [countdown, setCountdown] = useState<number>(5);
  let timeout: any;
  let test = 5;

  /**
   * @todo change approach to factor in state
   * @see https://eight-bites.blog/en/2021/05/setinterval-setstate/
   */
  function triggerDisplayDotsAnimation() {
    console.log("TRIGGER!");
    timeout = setInterval(() => {
      if (test > 0) {
        setCountdown((prev) => prev--);
        console.log("Delayed for 1 second. Countdown: ", test);
        test--;
      } else {
        clearInterval(timeout);
      }
    }, 1000);
  }

  useEffect(() => {
    console.log("CONTEXT: inactiveCoords: ", inactiveCoords);
    if (inactiveCoords) triggerDisplayDotsAnimation();
  }, [inactiveCoords]);

  return (
    <DisplayDotsCoordsContext.Provider
      value={{
        inactiveCoords,
        deactivatedCoords,
        setInactiveCoords,
        setDeactivatedCoords,
      }}
    >
      {children}
    </DisplayDotsCoordsContext.Provider>
  );
};

export default DisplayDotsCoordsProvider;

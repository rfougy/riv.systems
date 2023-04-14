import { useEffect, useRef } from "react";

/**
 * @description sets up an interval and clears it after unmounting. It’s a combination of setInterval and clearInterval tied to the component lifecycle.
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
export function useInterval(
  stopTrigger: boolean,
  callback: () => void | string,
  delay: number
) {
  const savedCallback: any = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback, stopTrigger]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (!stopTrigger) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [stopTrigger, delay]);
}

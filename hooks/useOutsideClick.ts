import { useEffect, useState } from "react";

function useOutsideClick(ref: any, callback: () => any) {
  const [clickedOutside, setClickedOutside] = useState<boolean>(false);

  function handleOutsideClick(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setClickedOutside(true);
      callback();
    } else {
      setClickedOutside(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return clickedOutside;
}

export default useOutsideClick;

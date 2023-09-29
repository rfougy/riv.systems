import { useEffect } from "react";

function useOutsideClick(ref: any, callback: () => any) {
  function handleOutsideClick(event: MouseEvent) {
    if (ref.current && !ref.current.contains(event.target as Node)) callback();
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
}

export default useOutsideClick;

import { useState, useEffect } from "react";

function useWindowWidthEventListener(width: number | string): boolean {
  const [isColumnView, setIsColumnView] = useState<boolean>(false);

  function windowInColumnView(): void {
    window.innerWidth < width ? setIsColumnView(true) : setIsColumnView(false);
  }

  useEffect(() => {
    windowInColumnView();

    window.addEventListener("resize", windowInColumnView);
    return () => window.removeEventListener("resize", windowInColumnView);
  }, []);

  return isColumnView;
}

export default useWindowWidthEventListener;

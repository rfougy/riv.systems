import { useState, useEffect } from "react";

function useViewportWidthEventListener(width: number | string): boolean {
  const [isColumnView, setIsColumnView] = useState<boolean>(false);

  function windowInColumnView(): void {
    window.innerWidth < (width as number)
      ? setIsColumnView(true)
      : setIsColumnView(false);
  }

  useEffect(() => {
    windowInColumnView();

    window.addEventListener("resize", windowInColumnView);
    return () => window.removeEventListener("resize", windowInColumnView);
  }, []);

  return isColumnView;
}

export default useViewportWidthEventListener;

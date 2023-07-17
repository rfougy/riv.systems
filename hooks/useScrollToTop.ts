import { useEffect } from "react";
import useViewportWidthEventListener from "./useViewportWidthListener";
import { breakpoints } from "../styles/theme";
import { scrollToTop } from "../utils/common/scrollToTop";

function useScrollToTop(dependencyArr: any[]): boolean {
  const isVerticalView = useViewportWidthEventListener(
    breakpoints.useViewportWidth.xs
  );

  useEffect(() => {
    if (!isVerticalView) scrollToTop();
  }, dependencyArr);

  return isVerticalView;
}

export default useScrollToTop;

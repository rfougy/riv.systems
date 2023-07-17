import { SerializedStyles, css } from "@emotion/react";

import { ITheme } from "../../interfaces/ITheme";
import { getScrollbarStyles } from "./getScrollbarStyles";
import { getGlobalColorsByTheme } from "./getGlobalColorsByTheme";

export function getGlobalEmotionStyles(currTheme: ITheme): SerializedStyles {
  const globalColors = getGlobalColorsByTheme(currTheme);
  const scrollbarStyles = getScrollbarStyles(currTheme);

  return css`
    ${globalColors} ${scrollbarStyles}
  `;
}

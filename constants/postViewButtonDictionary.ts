import { IPostViewButtonDictionary } from "../interfaces/IPostViewButtonDictionary";
import columnViewIcon from "../public/assets/view-icon-column.svg";
import defaultViewIcon from "../public/assets/view-icon-default.svg";
import gridViewIcon from "../public/assets/view-icon-grid.svg";

export const postViewButtonDictionary: IPostViewButtonDictionary = {
  default: {
    icon: defaultViewIcon,
    ariaLabel: "Default View Button",
    imageAlt: "Default View Icon",
  },
  column: {
    icon: columnViewIcon,
    ariaLabel: "Column View Button",
    imageAlt: "Column View Icon",
  },
};

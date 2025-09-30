import { IPostViewButtonDict } from "../../interfaces/IPostViewButtonDict";
import columnViewIcon from "../../public/assets/view-icon-column.svg";
import defaultViewIcon from "../../public/assets/view-icon-default.svg";
import gridViewIcon from "../../public/assets/view-icon-grid.svg";

export const postViewButtonDict: IPostViewButtonDict = {
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
  gallery: {
    icon: gridViewIcon,
    ariaLabel: "Gallery View Button",
    imageAlt: "Gallery View Icon",
  },
};

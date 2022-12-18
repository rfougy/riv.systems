import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";

const options = {
  damping: 0.07,
  renderByPixels: true,
};

const SmoothScrollbar = () => {
  useEffect(() => {
    Scrollbar.init(document.body, options);
  }, []);

  return null;
};

export default SmoothScrollbar;

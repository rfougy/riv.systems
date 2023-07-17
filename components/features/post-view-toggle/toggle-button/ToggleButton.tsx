import { postViewButtonDict } from "../../../../constants/dictionaries/postViewButtonDict";

import { postView } from "../../../../types/postView";
import IconButton from "../../../shared/icon-button/IconButton";

const ToggleButton: React.FC<{
  isActive: boolean;
  postViewOption: postView;
  setPostView: (arg: postView) => void;
}> = ({ isActive, postViewOption, setPostView }) => {
  const { ariaLabel, imageAlt, icon } = postViewButtonDict[postViewOption];

  function handleClick(viewType: postView): void {
    setPostView(viewType);
  }

  return (
    <IconButton
      src={icon}
      alt={imageAlt}
      ariaLabel={ariaLabel}
      isActive={isActive}
      onClick={() => handleClick(postViewOption)}
    />
  );
};

export default ToggleButton;

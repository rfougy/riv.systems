import Image from "next/legacy/image";

import { postViewButtonDictionary } from "../../../../constants/postViewButtonDictionary";

import { postView } from "../../../../types/postView";

import { Button } from "./ToggleButton.styled";

const ToggleButton: React.FC<{
  isCurrView: boolean;
  postViewOption: postView;
  setPostView: (arg: postView) => void;
}> = ({ isCurrView, postViewOption, setPostView }) => {
  const { ariaLabel, imageAlt, icon } =
    postViewButtonDictionary[postViewOption];

  function handleClick(viewType: postView): void {
    setPostView(viewType);
  }

  return (
    <>
      {/* @ts-ignore */}
      <Button
        aria-label={ariaLabel}
        isCurrView={isCurrView}
        onClick={() => handleClick(postViewOption)}
      >
        <Image src={icon} alt={imageAlt} layout="fill" objectFit="contain" />
      </Button>
    </>
  );
};

export default ToggleButton;

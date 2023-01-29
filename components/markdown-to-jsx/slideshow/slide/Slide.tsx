import { useEffect } from "react";
import { ISlide } from "../../../../interfaces/ISlide";
import { aspectRatio } from "../../../../types/aspectRatio";
import NextImage from "../../NextImage";

const Slide: React.FC<{ slide: ISlide; aspectRatio: aspectRatio }> = ({
  slide,
  aspectRatio,
}) => {
  useEffect(() => console.log("Slide props: ", slide));

  return <NextImage aspectRatio={aspectRatio} {...slide} />;
};

export default Slide;

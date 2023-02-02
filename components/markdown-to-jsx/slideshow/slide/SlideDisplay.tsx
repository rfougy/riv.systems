import { ISlide } from "../../../../interfaces/ISlide";
import { aspectRatio } from "../../../../types/aspectRatio";
import NextImage from "../../NextImage";

const SlideDisplay: React.FC<{ slide: ISlide; aspectRatio: aspectRatio }> = ({
  slide,
  aspectRatio,
}) => <NextImage aspectRatio={aspectRatio} {...slide} />;

export default SlideDisplay;

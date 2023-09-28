import { ISlide } from "../../../../interfaces/ISlide";
import { aspectRatio } from "../../../../types/aspectRatio";
import NextImage from "../../next-image/NextImage";

const SlideDisplay: React.FC<{ slide: ISlide; aspectRatio: aspectRatio }> = ({
  slide,
  aspectRatio,
}) => <NextImage priority aspectRatio={aspectRatio} {...slide} />;

export default SlideDisplay;

import NextImage from "../../NextImage";
import _ from "lodash";

import { ISlide } from "../../../../interfaces/ISlide";

const SlideThumbnail: React.FC<{ slide: ISlide; currSlide: ISlide }> = ({
  slide,
  currSlide,
}) => {
  const isCurrSlide: boolean = _.isEqual(slide, currSlide);

  return (
    <div>
      <NextImage aspectRatio={"1:1"} {...slide} />
    </div>
  );
};

export default SlideThumbnail;

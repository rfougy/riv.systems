import { useEffect, useState } from "react";
import { ISlide } from "../../../interfaces/ISlide";
import { aspectRatio } from "../../../types/aspectRatio";
import SlideThumbnailList from "./slide-thumbnail-list/SlideThumbnailList";
import Slide from "./slide/Slide";

const Slideshow: React.FC<{ children: any[]; aspectRatio: aspectRatio }> = ({
  children,
  aspectRatio = "4:3",
}) => {
  const [currSlide, setCurrSlide] = useState();

  const slides: ISlide[] = children.map((child: any) => {
    return { src: child.props.src, alt: child.props.alt, key: child.props.key };
  });

  useEffect(() => console.log("Slideshow props: ", children));

  return (
    <>
      {slides.map((slide: ISlide) => (
        <Slide key={slide.key} slide={slide} aspectRatio={aspectRatio} />
      ))}
    </>
  );
};

export default Slideshow;

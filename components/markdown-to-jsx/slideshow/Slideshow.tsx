import { useEffect, useState } from "react";
import SlideThumbnailList from "./slide-thumbnail-list/SlideThumbnailList";
import Slide from "./slide/Slide";

const Slideshow: React.FC<{ children: any[] }> = ({ children }) => {
  const [currSlide, setCurrSlide] = useState();

  const slides = children.map((child: any) => {
    return { src: child.props.src, alt: child.props.alt };
  });

  useEffect(() => console.log("Slideshow props: ", children));

  return (
    <>
      {slides.map((slide: any, index: number) => (
        <Slide key={index} slide={slide} />
      ))}
    </>
  );
};

export default Slideshow;

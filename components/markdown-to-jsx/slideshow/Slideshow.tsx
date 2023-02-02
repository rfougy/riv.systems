import { useEffect, useState } from "react";
import { ISlide } from "../../../interfaces/ISlide";
import { aspectRatio } from "../../../types/aspectRatio";
import SlideThumbnailList from "./slide-thumbnail-list/SlideThumbnailList";
import SlideDisplay from "./slide/SlideDisplay";

const Slideshow: React.FC<{ children: any[]; aspectRatio: aspectRatio }> = ({
  children,
  aspectRatio = "4:3",
}) => {
  const slides: ISlide[] = children.map((child: any) => {
    return { src: child.props.src, alt: child.props.alt, key: child.props.key };
  });
  const lastSlideIndex: number = slides.length - 1;
  const firstSlideIndex: number = 0;

  const [currSlide, setCurrSlide] = useState<any>(slides[0]);
  const [currSlideIndex, setCurrSlideIndex] = useState<number>(0);

  function handleNextSlide(): void {
    const nextSlideIndex: number = currSlideIndex + 1;

    nextSlideIndex <= lastSlideIndex
      ? setCurrSlideIndex(nextSlideIndex)
      : setCurrSlideIndex(firstSlideIndex);
  }

  function handlePrevSlide(): void {
    const prevSlideIndex: number = currSlideIndex - 1;

    prevSlideIndex >= firstSlideIndex
      ? setCurrSlideIndex(prevSlideIndex)
      : setCurrSlideIndex(lastSlideIndex);
  }

  useEffect(() => setCurrSlide(slides[currSlideIndex]), [currSlideIndex]);

  return (
    <>
      <button onClick={() => handleNextSlide()}></button>
      <SlideDisplay
        key={currSlide.key}
        slide={currSlide}
        aspectRatio={aspectRatio}
      />
      <button onClick={() => handlePrevSlide()}></button>
    </>
  );
};

export default Slideshow;

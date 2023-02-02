import { useEffect, useState } from "react";
import { ISlide } from "../../../interfaces/ISlide";
import { aspectRatio } from "../../../types/aspectRatio";
import SlideThumbnail from "./slide-thumbnail/SlideThumbnail";
import SlideDisplay from "./slide-display/SlideDisplay";

const Slideshow: React.FC<{ children: any[]; aspectRatio: aspectRatio }> = ({
  children,
  aspectRatio = "4:3",
}) => {
  const slides: ISlide[] = children.map((child: any, index: number) => {
    return { src: child.props.src, alt: child.props.alt, key: index };
  });
  const lastSlideIndex: number = slides.length - 1;
  const firstSlideIndex: number = 0;

  const [currSlide, setCurrSlide] = useState<ISlide>(slides[0]);
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
  useEffect(() => console.log(slides), [currSlideIndex]);

  return (
    <>
      <button onClick={() => handleNextSlide()}></button>
      <SlideDisplay
        key={currSlide.key}
        slide={currSlide}
        aspectRatio={aspectRatio}
      />
      <button onClick={() => handlePrevSlide()}></button>
      <div>
        {slides.map((slide: ISlide) => (
          <SlideThumbnail key={slide.key} slide={slide} currSlide={currSlide} />
        ))}
      </div>
    </>
  );
};

export default Slideshow;

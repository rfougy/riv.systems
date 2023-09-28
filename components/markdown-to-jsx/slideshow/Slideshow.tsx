import { useEffect, useState } from "react";
import { ISlide } from "../../../interfaces/ISlide";
import { aspectRatio } from "../../../types/aspectRatio";
import SlideThumbnail from "./slide-thumbnail/SlideThumbnail";
import SlideDisplay from "./slide-display/SlideDisplay";
import {
  Button,
  Navigation,
  List,
  Box,
  AltText,
  SubBox,
  NavArrowIcon,
} from "./Slideshow.styled";

const Slideshow: React.FC<{ children: any[]; aspectRatio: aspectRatio }> = ({
  children,
  aspectRatio = "4:3",
}) => {
  const slides: ISlide[] = children.map((child: any, index: number) => {
    return { src: child.props.src, alt: child.props.alt, key: index };
  });

  const [currSlide, setCurrSlide] = useState<ISlide>(slides[0]);
  const [currSlideIndex, setCurrSlideIndex] = useState<number>(0);

  const firstSlideIndex: number = 0;
  const lastSlideIndex: number = slides.length - 1;
  const nextSlideIndex: number = currSlideIndex + 1;
  const prevSlideIndex: number = currSlideIndex - 1;

  function handleNextSlide(): void {
    nextSlideIndex <= lastSlideIndex
      ? setCurrSlideIndex(nextSlideIndex)
      : setCurrSlideIndex(firstSlideIndex);
  }

  function handlePrevSlide(): void {
    prevSlideIndex >= firstSlideIndex
      ? setCurrSlideIndex(prevSlideIndex)
      : setCurrSlideIndex(lastSlideIndex);
  }

  useEffect(() => setCurrSlide(slides[currSlideIndex]), [currSlideIndex]);

  return (
    <Box>
      <SlideDisplay
        key={currSlide.key}
        slide={currSlide}
        aspectRatio={aspectRatio}
      />
      <Navigation>
        <Button aspectRatio={aspectRatio} onClick={() => handlePrevSlide()}>
          <NavArrowIcon left />
        </Button>
        <Button aspectRatio={aspectRatio} onClick={() => handleNextSlide()}>
          <NavArrowIcon right />
        </Button>
      </Navigation>
      <SubBox>
        <AltText>{currSlide.alt}</AltText>
        <List>
          {slides.map((slide: ISlide, index: number) => (
            <SlideThumbnail
              key={slide.key}
              currSlide={currSlide}
              slide={slide}
              slideIndex={index}
              setCurrSlideIndex={setCurrSlideIndex}
            />
          ))}
        </List>
      </SubBox>
    </Box>
  );
};

export default Slideshow;

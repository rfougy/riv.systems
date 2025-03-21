"use client";

import React, { useMemo, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {
  MainSwiperContainer,
  SlideImage,
  SlideshowContainer,
  StyledSwiper,
  ThumbImage,
  ThumbsSwiper,
} from "./Slideshow.styled";

type Slide = {
  src: string;
  alt: string;
};

const Slideshow: React.FC<{
  aspectRatio?: string;
  slides: string; // stringified JSON, expected type Slide
  navArrowColor?: string;
  hideThumbnails?: boolean;
}> = ({
  aspectRatio = "16 / 9",
  slides,
  hideThumbnails = false,
  navArrowColor = "#000000",
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [currSlideIdx, setCurrSlideIdx] = useState<number | undefined>(0);

  const parsedSlides: Slide[] = useMemo(() => JSON.parse(slides), [slides]);

  return (
    <SlideshowContainer>
      <MainSwiperContainer>
        <StyledSwiper
          modules={[Navigation, Thumbs]}
          navigation
          slidesPerView={1}
          spaceBetween={30}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          onSlideChange={(swiper: SwiperType) =>
            setCurrSlideIdx(swiper.activeIndex)
          }
          style={{
            // @ts-ignore
            "--swiper-navigation-color": navArrowColor,
            aspectRatio: aspectRatio,
          }}
        >
          {parsedSlides.map((image: Slide, index: number) => (
            <SwiperSlide key={index}>
              <SlideImage src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </MainSwiperContainer>
      {!hideThumbnails && (
        <ThumbsSwiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          slidesPerView={parsedSlides.length <= 5 ? parsedSlides.length : 5}
          spaceBetween={10}
        >
          {parsedSlides.map((image: Slide, index: number) => (
            <SwiperSlide key={index}>
              <ThumbImage
                src={image.src}
                alt={`Thumbnail for ${image.alt}`}
                isActive={index === currSlideIdx}
              />
            </SwiperSlide>
          ))}
        </ThumbsSwiper>
      )}
    </SlideshowContainer>
  );
};

export default Slideshow;

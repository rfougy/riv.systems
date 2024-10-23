"use client";

import React, { useState } from "react";
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

const Slideshow: React.FC<{ slides: {
  src: string;
  alt: string;
}[] }> = ({ slides }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <SlideshowContainer>
      <MainSwiperContainer>
        <StyledSwiper
          modules={[Navigation, Thumbs]}
          navigation
          loop
          slidesPerView={1}
          spaceBetween={30}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          style={{
            // @ts-ignore
            "--swiper-navigation-color": "#000000",
          }}
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <SlideImage src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </MainSwiperContainer>
      <ThumbsSwiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        loop
        watchSlidesProgress
        slidesPerView={5}
        spaceBetween={10}
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <ThumbImage src={image.src} alt={`Thumbnail for ${image.alt}`} />
          </SwiperSlide>
        ))}
      </ThumbsSwiper>
    </SlideshowContainer>
  );
};

export default Slideshow;

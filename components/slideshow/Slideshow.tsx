"use client";

import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import {
  MainSwiperContainer,
  NextButton,
  PrevButton,
  SlideImage,
  SlideshowContainer,
  StyledSwiper,
  ThumbImage,
  ThumbsSwiper,
} from "./Slideshow.styled";

interface SlideImage {
  src: string;
  alt: string;
}

const Slideshow: React.FC<{ slides: SlideImage[] }> = ({ slides }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <SlideshowContainer>
      <MainSwiperContainer>
        <StyledSwiper
          modules={[Navigation, Thumbs]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          slidesPerView={1}
          spaceBetween={30}
        >
          {slides.map((image, index) => (
            <SwiperSlide key={index}>
              <SlideImage src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
        <PrevButton className="swiper-button-prev">
          <ChevronLeft size={24} color="var(--primary-color)" />
        </PrevButton>
        <NextButton className="swiper-button-next">
          <ChevronRight size={24} color="var(--primary-color)" />
        </NextButton>
      </MainSwiperContainer>
      <ThumbsSwiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        watchSlidesProgress
        slidesPerView={4}
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

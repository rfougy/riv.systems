"use client";

import React, { useMemo, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Modal from "../../shared/modal/Modal";
import useViewportWidthListener from "../../../hooks/useViewportWidthListener";
import { breakpoints } from "../../../styles/theme";

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

export type Slide = {
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isBelowMinWidth = useViewportWidthListener(
    breakpoints.useViewportWidth.xs
  );

  const parsedSlides: Slide[] = useMemo(() => JSON.parse(slides), [slides]);

  function handleSlideClick() {
    if (!isBelowMinWidth) setIsModalOpen(true);
  }

  return (
    <SlideshowContainer>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          aspectRatio={aspectRatio.replace(":", "/")}
        >
          <StyledSwiper
            modules={[Navigation, Thumbs]}
            navigation
            loop
            slidesPerView={1}
            spaceBetween={30}
            initialSlide={currSlideIdx || 0}
            style={{
              // @ts-ignore
              "--swiper-navigation-color": navArrowColor,
              height: "100%",
            }}
          >
            {parsedSlides.map((image: Slide, index: number) => (
              <SwiperSlide key={index}>
                <SlideImage src={image.src} alt={image.alt} />
              </SwiperSlide>
            ))}
          </StyledSwiper>
        </Modal>
      )}
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
              <SlideImage
                src={image.src}
                alt={image.alt}
                onClick={handleSlideClick}
                style={{ cursor: isBelowMinWidth ? "crosshair" : "cell" }}
              />
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

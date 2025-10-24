import React, { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { Slide } from "./Slideshow";

import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalStyledSwiper,
  ModalSlideImage,
} from "./Modal.styled";

interface SlideshowModalProps {
  slides: Slide[];
  initialSlide: number;
  onClose: () => void;
  navArrowColor?: string;
  aspectRatio?: string;
}

const SlideshowModal: React.FC<SlideshowModalProps> = ({
  slides,
  initialSlide,
  onClose,
  navArrowColor = "#FFFFFF",
  aspectRatio = "16 / 9",
}) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <ModalOverlay
      onClick={(e: any) => e.target === e.currentTarget && onClose()}
    >
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalStyledSwiper
          modules={[Navigation, Thumbs]}
          navigation
          loop
          slidesPerView={1}
          spaceBetween={30}
          initialSlide={initialSlide}
          style={{
            // @ts-ignore
            "--swiper-navigation-color": navArrowColor,
            aspectRatio: aspectRatio,
          }}
        >
          {slides.map((image: Slide, index: number) => (
            <SwiperSlide key={index}>
              <ModalSlideImage src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
        </ModalStyledSwiper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SlideshowModal;

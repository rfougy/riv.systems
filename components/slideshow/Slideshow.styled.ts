import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const SlideshowContainer = styled.div`
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
`;

export const MainSwiperContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const StyledSwiper = styled(Swiper)`
  .swiper-slide {
    aspect-ratio: 16 / 9;
  }
`;

export const SlideImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 9999px;
  padding: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-color);
  }
`;

export const PrevButton = styled(NavigationButton)`
  left: 1rem;
`;

export const NextButton = styled(NavigationButton)`
  right: 1rem;
`;

export const ThumbsSwiper = styled(Swiper)`
  .swiper-slide {
    aspect-ratio: 16 / 9;
    cursor: pointer;
  }
`;

export const ThumbImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  opacity: 0.5;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

import styled from "@emotion/styled";
import { Swiper } from "swiper/react";
import { breakpoints } from "../../../styles/theme";

export const SlideshowContainer = styled.div`
  width: calc(100vw - 2.5rem);
  max-width: 50rem;
  margin: 0 auto;

  @media (max-width: ${breakpoints.xs}) {
    width: calc(100vw - 2rem);
  }
`;

export const MainSwiperContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const StyledSwiper = styled(Swiper)`
  .swiper-slide {
    cursor: grab;
    &:hover {
      cursor: grab;
    }
    &:active {
      cursor: grabbing;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    cursor: cell;
  }
`;

export const SlideImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 2vh;
`;

export const ThumbsSwiper = styled(Swiper)`
  .swiper-slide {
    aspect-ratio: 1 / 1;
    max-width: 5rem;
    max-height: 5rem;
    cursor: cell;
  }
`;

export const ThumbImage = styled.img<{
  isActive: boolean;
}>`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 2vh;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  transition: opacity 0.2s;

  &:hover {
    cursor: cell;
    opacity: 1; /* Maintain hover effect */
  }
`;

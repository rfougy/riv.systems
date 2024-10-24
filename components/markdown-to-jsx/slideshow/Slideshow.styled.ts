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

export const StyledSwiper = styled(Swiper)``;

export const SlideImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;

export const ThumbsSwiper = styled(Swiper)`
  .swiper-slide {
    aspect-ratio: 16 / 9;
    cursor: pointer;
  }
`;

export const ThumbImage = styled.img<{
  isActive: boolean;
}>`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  transition: opacity 0.2s;

  &:hover {
    opacity: 1; /* Maintain hover effect */
  }
`;

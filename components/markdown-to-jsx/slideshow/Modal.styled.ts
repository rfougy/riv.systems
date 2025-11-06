import styled from "@emotion/styled";
import { StyledSwiper, SlideImage } from "./Slideshow.styled";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  width: min(
    90vw,
    calc(90vh * 16 / 9)
  ); /* Maintains aspect ratio while respecting viewport */
  height: min(90vh, calc(90vw * 9 / 16));
  position: relative;
  margin: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;
`;

export const ModalStyledSwiper = styled(StyledSwiper)`
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
`;

export const ModalSlideImage = styled(SlideImage)`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
`;

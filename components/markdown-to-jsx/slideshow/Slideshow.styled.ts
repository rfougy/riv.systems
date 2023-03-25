import styled from "@emotion/styled";
import { lightTheme } from "../../../styles/theme";
import { aspectRatio } from "../../../types/aspectRatio";
import { ArrowIcon } from "../../icons/ArrowIcon.styled";

export const Button = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  width: 2rem;

  margin: ${({ aspectRatio = "4:3" }: { aspectRatio?: aspectRatio }) => {
    switch (aspectRatio) {
      case "16:9":
        return "27.75% 0";
      case "9:16":
        return "95% 0";
      case "4:3":
        return "37.5% 0";
      case "3:4":
        return "70% 0";
      case "1:1":
        return "50% 0";
      default:
        return "0";
    }
  }};

  background-color: ${lightTheme.primary};
  border-radius: 50%;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;

export const NavArrowIcon = styled(ArrowIcon)`
  position: relative;
  width: 0.75rem;
  height: 0.75rem;
  margin: ${({ right, left }: { right?: boolean; left?: boolean }) => {
    if (right) return "0 0.25rem 0 0";
    if (left) return "0 0 0 0.25rem";
  }};

  border-color: ${lightTheme.secondary};
`;

export const List = styled.ol`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.25em 0.5em;

  margin: 0;
  padding: 0;

  @media (max-width: 35.625em) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 32.188em) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 28.75em) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Navigation = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;

  position: absolute;
  top: 0;

  padding: 0 1.5em;
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
`;

export const AltText = styled.p`
  display: inline-block;

  margin: 0;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;

  @media (max-width: 28.75em) {
    display: none;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  gap: 2em;

  margin-top: 0.75rem;

  @media (max-width: 28.75em) {
    justify-content: center;
  }
`;

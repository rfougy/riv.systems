import styled from "@emotion/styled";
import { lightTheme } from "../../../styles/Themes";
import { aspectRatio } from "../../../types/aspectRatio";
import { ArrowIcon } from "../../icons/ArrowIcon.styled";

export const Button = styled.button`
  all: unset;
  opacity: 0.75;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  margin: ${({ aspectRatio = "16:9" }: { aspectRatio?: aspectRatio }) => {
    switch (aspectRatio) {
      case "16:9":
        return "27.75% 0";
      case "9:16":
        return "27.75% 0";
      case "4:3":
        return "27.75% 0";
      case "3:4":
        return "70% 0";
      case "1:1":
        return "27.75% 0";
      default:
        return "0";
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${lightTheme.primary};

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
`;

export const List = styled.ol`
  display: grid;
  gap: 0.25rem 0.5rem;
  grid-template-columns: repeat(5, 1fr);
  margin: 0;
  padding: 0;
`;

export const Navigation = styled.div`
  display: flex;
  position: absolute;

  top: 0;

  flex-wrap: no-wrap;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.5rem;
`;

export const Container = styled.div`
  position: relative;
`;

export const AltText = styled.p`
  display: inline-block;
  height: 3.281rem;
  margin: 0;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;

  @media (max-width: 25em) {
    display: none;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  gap: 2rem;

  margin-top: 0.75rem;

  @media (max-width: 25em) {
    justify-content: center;
  }
`;

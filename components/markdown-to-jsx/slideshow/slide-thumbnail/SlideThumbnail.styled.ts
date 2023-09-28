import { breakpoints } from "./../../../../styles/theme";
import styled from "@emotion/styled";

export const Thumbnail = styled.button`
  all: unset;
  position: relative;
  opacity: ${({ isCurrSlide }: { isCurrSlide: boolean }) =>
    isCurrSlide ? 1 : 0.4};
  height: 3rem;
  width: 3rem;

  &:hover {
    opacity: 1;
  }

  @media (max-width: ${breakpoints.xxs}) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const ListItem = styled.li`
  all: unset;
`;

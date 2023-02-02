import styled from "@emotion/styled";

export const Thumbnail = styled.button`
  all: unset;
  margin: 0 0.25rem;
  opacity: ${({ isCurrSlide }: { isCurrSlide: boolean }) =>
    isCurrSlide ? 1 : 0.4};
  width: 3rem;

  &:hover {
    opacity: 1;
  }
`;

export const ListItem = styled.li`
  all: unset;
`;

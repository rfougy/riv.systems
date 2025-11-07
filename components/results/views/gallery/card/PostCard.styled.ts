import styled from "@emotion/styled";

interface BoxProps {
  aspectRatio?: string;
}

export const Box = styled.div<BoxProps>`
  overflow: hidden;
  text-decoration: none;
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio || "1/1"};

  margin: auto;
  border: solid transparent;
  border-radius: 2rem;
  border-width: 0 0.075rem 0.1rem 0.075rem;

  &:hover {
    div {
      background: ${(props: any) => props.theme.highlight};
    }
  }
`;

export const ModalBox = styled.div<BoxProps>`
  position: relative;
  width: 100%;

  aspect-ratio: ${({ aspectRatio }) => aspectRatio || "1/1"};
`;

export const MetadataContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

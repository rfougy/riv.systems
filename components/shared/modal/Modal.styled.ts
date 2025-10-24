import styled from "@emotion/styled";

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

export const ModalContent = styled.div<{ aspectRatio?: string }>`
  width: min(
    90vw,
    calc(
      90vh *
        ${(props) => {
          if (!props.aspectRatio) return "16/9";
          const [width, height] = props.aspectRatio
            .split("/")
            .map((n) => Number(n.trim()));
          return `${width}/${height}`;
        }}
    )
  );
  height: min(
    90vh,
    calc(
      90vw *
        ${(props) => {
          if (!props.aspectRatio) return "9/16";
          const [width, height] = props.aspectRatio
            .split("/")
            .map((n) => Number(n.trim()));
          return `${height}/${width}`;
        }}
    )
  );
  position: relative;
  margin: auto;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 12px;
  right: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;

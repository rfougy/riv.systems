import React, { useEffect } from "react";
import { ModalOverlay, ModalContent, CloseButton } from "./Modal.styled";
import CloseIcon from "./icons/CloseIcon";

const Modal: React.FC<{
  children: React.ReactNode;
  onClose: () => void;
  aspectRatio?: string;
}> = ({ children, onClose, aspectRatio }) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <ModalOverlay
      onClick={(e: React.MouseEvent) =>
        e.target === e.currentTarget && onClose()
      }
    >
      <ModalContent aspectRatio={aspectRatio}>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

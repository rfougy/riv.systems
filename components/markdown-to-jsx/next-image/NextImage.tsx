import Image from "next/image";
import { useState } from "react";
import { Box } from "./NextImage.styled";
import Modal from "../../shared/modal/Modal";
import useViewportWidthListener from "../../../hooks/useViewportWidthListener";
import { breakpoints } from "../../../styles/theme";

const NextImage: React.FC<{
  src: string;
  alt?: string | undefined;
  aspectRatio?: string; // Ex. 1:1, 16:9
  isSlideThumbnail?: boolean;
  priority?: boolean;
}> = ({
  src,
  alt = "Photo for blog post in riv.systems",
  aspectRatio = "3:4",
  isSlideThumbnail,
  priority = false,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isBelowMinWidth = useViewportWidthListener(
    breakpoints.useViewportWidth.xs
  );

  function handleImageClick() {
    if (!isBelowMinWidth && !isSlideThumbnail) setIsModalOpen(true);
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          aspectRatio={aspectRatio.replace(":", "/")}
        >
          <Box aspectRatio={aspectRatio}>
            <Image
              src={src}
              alt={alt}
              fill
              priority
              style={{
                borderRadius: "2vh",
                objectFit: "cover",
              }}
            />
          </Box>
        </Modal>
      )}
      <Box
        aspectRatio={aspectRatio}
        onClick={handleImageClick}
        style={{
          cursor: isBelowMinWidth || isSlideThumbnail ? "crosshair" : "cell",
        }}
      >
        <Image
          priority={priority}
          src={src}
          alt={alt}
          fill
          style={{
            borderRadius: isSlideThumbnail ? "50%" : "2vh",
            objectFit: "cover",
          }}
        />
      </Box>
    </>
  );
};

export default NextImage;

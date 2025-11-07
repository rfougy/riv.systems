import Image from "next/image";

import { IPostFrontMatter } from "../../../../../interfaces/IPostFrontMatter";

import { Box, ModalBox } from "./PostCard.styled";
import useViewportWidthEventListener from "../../../../../hooks/useViewportWidthListener";
import { useState } from "react";
import { breakpoints } from "../../../../../styles/theme";
import Modal from "../../../../shared/modal/Modal";

const PostCard: React.FC<{
  path: string;
  frontmatter: any;
  galleryCoverImage?: { path: string; aspectRatio: string };
}> = ({ path, frontmatter, galleryCoverImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { title, coverImage, placeholderImage }: IPostFrontMatter = frontmatter;

  const isBelowMinWidth = useViewportWidthEventListener(
    breakpoints.useViewportWidth.xs
  );

  function handleImageClick() {
    if (!isBelowMinWidth) setIsModalOpen(true);
  }

  return (
    <>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          aspectRatio={galleryCoverImage?.aspectRatio}
        >
          <ModalBox aspectRatio={galleryCoverImage?.aspectRatio}>
            <Image
              src={galleryCoverImage ? galleryCoverImage.path : coverImage}
              alt={`Cover image for post titled '${title}'`}
              fill
              placeholder="blur"
              blurDataURL={placeholderImage}
              style={{
                borderRadius: "2vh",
                objectFit: "cover",
              }}
            />
          </ModalBox>
        </Modal>
      )}
      <Box
        aspectRatio={galleryCoverImage?.aspectRatio}
        onClick={handleImageClick}
        style={{
          cursor: isBelowMinWidth ? "crosshair" : "cell",
        }}
      >
        <Image
          src={galleryCoverImage ? galleryCoverImage.path : coverImage}
          alt={`Cover image for post titled '${title}'`}
          width={2000}
          height={2000}
          placeholder="blur"
          blurDataURL={placeholderImage}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </>
  );
};

export default PostCard;

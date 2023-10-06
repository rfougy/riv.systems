import Image from "next/image";
import { Box } from "./NextImage.styled";

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
}) => (
  <Box aspectRatio={aspectRatio}>
    <Image
      priority={priority}
      src={src}
      alt={alt}
      fill
      style={{
        borderRadius: isSlideThumbnail ? "50%" : "2vh",
        objectFit: "contain",
      }}
    />
  </Box>
);

export default NextImage;

import Image from "next/legacy/image";
import { getWidthHeightFromAspectRatio } from "../../utils/getWidthHeightFromAspectRatio";

const NextImage: React.FC<{
  src: string;
  alt?: string | undefined;
  aspectRatio?: "16:9" | "9:16" | "4:3" | "3:4" | "1:1";
  isSlideThumbnail?: boolean;
  priority?: boolean;
}> = ({
  src,
  alt = "Photo for blog post in riv.systems",
  aspectRatio = "3:4",
  isSlideThumbnail,
  priority = false,
}) => {
  const { width, height } = getWidthHeightFromAspectRatio(aspectRatio);

  return (
    <Image
      priority={priority}
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit="cover"
      style={{ borderRadius: isSlideThumbnail ? "50%" : "2vh" }}
    />
  );
};

export default NextImage;

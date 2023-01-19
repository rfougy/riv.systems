import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const NextImage: React.FC<{
  src: string;
  alt?: string | undefined;
  aspectRatio?: "16:9" | "9:16" | "4:3" | "3:4" | "1:1";
}> = ({
  src,
  alt = "Photo for blog post in riv.systems",
  aspectRatio = "3:4",
}) => {
  const aspectRatioArr: string[] = aspectRatio?.split(":");
  const ratioWidth: number = parseInt(aspectRatioArr[0]);
  const ratioHeight: number = parseInt(aspectRatioArr[1]);

  const width: number = 800;
  const height: number = (width * ratioHeight) / ratioWidth;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit="cover"
      style={{ borderRadius: "2vh" }}
    />
  );
};

export default NextImage;

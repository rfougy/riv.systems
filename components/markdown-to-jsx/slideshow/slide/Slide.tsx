import Image from "next/image";
import { useEffect } from "react";

interface ISlide {
  src: string;
  alt: string;
  aspectRatio: "16:9" | "9:16" | "4:3" | "3:4" | "1:1";
}

const Slide: React.FC<{ slide: ISlide }> = ({ slide }) => {
  const { src, alt, aspectRatio = "3:4" } = slide;

  const aspectRatioArr: string[] = aspectRatio?.split(":");
  const ratioWidth: number = parseInt(aspectRatioArr[0]);
  const ratioHeight: number = parseInt(aspectRatioArr[1]);

  const width: number = 800;
  const height: number = (width * ratioHeight) / ratioWidth;

  useEffect(() => console.log("Slide props: ", slide));

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

export default Slide;

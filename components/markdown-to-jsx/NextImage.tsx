import Image from "next/image";

const NextImage: React.FC<{
  src: string;
  alt?: string | undefined;
  aspectRatio?: "16:9" | "9:16" | "4:3" | "3:4" | "1:1";
}> = ({
  src,
  alt = "Photo for blog post in riv.systems",
  aspectRatio = "3:4",
}) => {
  const aspectRatioArr: any = aspectRatio?.split(":");
  const width: number = 800 * aspectRatioArr[0];
  const height: number = 800 * aspectRatioArr[1];

  return (
    <Image
      priority
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

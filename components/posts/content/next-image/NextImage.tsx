import Image from "next/image";

const NextImage: React.FC<{
  children: any;
  src: string;
  alt: string | undefined;
  title?: string | undefined;
  className?: string | undefined;
}> = ({ children, alt, title, src, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={1067}
      objectFit="cover"
      style={{ borderRadius: "2vh" }}
    />
  );
};

export default NextImage;

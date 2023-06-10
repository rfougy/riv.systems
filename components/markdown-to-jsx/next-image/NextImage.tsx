import Image from "next/image";
import { Container } from "./NextImage.styled";

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
}) => (
  <Container aspectRatio={aspectRatio}>
    <Image
      priority={priority}
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 900px) 100vw, (max-width: 1600px) 50vw"
      style={{
        borderRadius: isSlideThumbnail ? "50%" : "2vh",
        objectFit: "cover",
      }}
    />
  </Container>
);

export default NextImage;

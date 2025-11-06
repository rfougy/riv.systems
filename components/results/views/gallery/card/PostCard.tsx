import Link from "next/link";
import Image from "next/image";

import { IPostFrontMatter } from "../../../../../interfaces/IPostFrontMatter";

import { Box } from "./PostCard.styled";

const PostCard: React.FC<{
  path: string;
  frontmatter: any;
  galleryCoverImage?: { path: string; aspectRatio: string };
}> = ({ path, frontmatter, galleryCoverImage }) => {
  const { title, coverImage, placeholderImage }: IPostFrontMatter = frontmatter;

  return (
    <Link href={path}>
      <Box aspectRatio={galleryCoverImage?.aspectRatio}>
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
    </Link>
  );
};

export default PostCard;

import Link from "next/link";
import Image from "next/image";

import { IPostFrontMatter } from "../../../../../interfaces/IPostFrontMatter";

import { Box } from "./PostCard.styled";

const PostCard: React.FC<{
  path: string;
  frontmatter: any;
  galleryCoverImage?: string;
}> = ({ path, frontmatter, galleryCoverImage }) => {
  const { title, coverImage, placeholderImage }: IPostFrontMatter = frontmatter;

  console.log("galleryCoverImage: ", galleryCoverImage);

  return (
    <Link href={path}>
      <Box>
        <Image
          src={galleryCoverImage ? galleryCoverImage : coverImage}
          alt={`Cover image for post titled '${title}'`}
          width={800}
          height={400}
          placeholder="blur"
          blurDataURL={placeholderImage}
          style={{
            maxWidth: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Link>
  );
};

export default PostCard;

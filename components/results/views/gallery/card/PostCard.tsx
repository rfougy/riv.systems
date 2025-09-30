import Link from "next/link";
import Image from "next/image";

import { IPostFrontMatter } from "../../../../../interfaces/IPostFrontMatter";

import { Box } from "./PostCard.styled";

const PostCard: React.FC<{
  path: string;
  frontmatter: any;
}> = ({ path, frontmatter }) => {
  const { title, coverImage, placeholderImage }: IPostFrontMatter = frontmatter;

  return (
    <Link href={path}>
      <Box>
        <Image
          src={coverImage}
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

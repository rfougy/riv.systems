import Link from "next/link";
import Image from "next/image";

import { capitalizeFirstChar } from "../../../../utils";

import { Box, ImageBox, Category, Text, Title } from "./PostCard.styled";

import IPostData from "../../../../interfaces/IPostData";

const PostCard: React.FC<{
  post: IPostData;
}> = ({ post }) => {
  const {
    path,
    frontmatter: { title, category, coverImage, placeholderImage },
  } = post;

  return (
    <Link href={path}>
      <Box>
        <ImageBox>
          <Image
            src={coverImage}
            alt={`Cover image for post titled '${title}'`}
            width={104}
            height={104}
            placeholder="blur"
            blurDataURL={placeholderImage}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </ImageBox>
        <Text>
          <Title>{title}</Title>
          <Category>{capitalizeFirstChar(category)}</Category>
        </Text>
      </Box>
    </Link>
  );
};

export default PostCard;

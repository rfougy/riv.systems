import Link from "next/link";
import Image from "next/image";

import { IPostFrontMatter } from "../../../../../interfaces/IPostFrontMatter";

import {
  Box,
  Category,
  Excerpt,
  Info,
  Metadata,
  MetadataContainer,
  Subheader,
  Title,
} from "./PostCard.styled";

import { capitalizeFirstChar } from "../../../../../utils/common/capitalizeFirstChar";
import { formatAndStylizeDate } from "../../../../../utils/common/formatAndStylizeDate";

const PostCard: React.FC<{
  path: string;
  frontmatter: any;
}> = ({ path, frontmatter }) => {
  const {
    title,
    datePublished,
    category,
    coverImage,
    placeholderImage,
    worksDuration,
    excerpt,
  }: IPostFrontMatter = frontmatter;

  const stylizedDate: string = formatAndStylizeDate(datePublished);

  const formattedDuration = worksDuration && worksDuration.join(" - ");
  const hasWorksDuration = worksDuration ? true : false;

  const categoryCapitalized =
    category === "archive.pdf"
      ? category.replace(/^[^.]+/, (match) => match.toUpperCase())
      : capitalizeFirstChar(category);

  return (
    <Link href={path}>
      <Box>
        <Category>{categoryCapitalized}</Category>
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
        <Subheader>
          <MetadataContainer>
            <Title>{title}</Title>
            <Metadata>
              <Info>{stylizedDate}</Info>
            </Metadata>
          </MetadataContainer>
          <Excerpt>{excerpt}</Excerpt>
        </Subheader>
      </Box>
    </Link>
  );
};

export default PostCard;

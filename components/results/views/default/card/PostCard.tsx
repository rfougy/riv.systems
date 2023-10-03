import Link from "next/link";
import Image from "next/image";

import { IPostFrontMatter } from "../../../../../interfaces/IPostFrontMatter";

import {
  Box,
  Category,
  Info,
  Metadata,
  MetadataContainer,
  Text,
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
  }: IPostFrontMatter = frontmatter;
  const stylizedDate: string = formatAndStylizeDate(datePublished);

  const formattedDuration = worksDuration && worksDuration.join(" - ");
  const hasWorksDuration = worksDuration ? true : false;

  return (
    <Link href={path}>
      <Box>
        <Category>{capitalizeFirstChar(category)}</Category>
        <Image
          src={coverImage}
          alt={`Cover image for post titled '${title}'`}
          width={650}
          height={150}
          placeholder="blur"
          blurDataURL={placeholderImage}
          style={{
            maxWidth: "100%",
            objectFit: "cover",
          }}
        />
        <Text>
          <Title>{title}</Title>
          <MetadataContainer>
            <Metadata hasWorksDuration={hasWorksDuration}>
              {hasWorksDuration && <Info>Worked: {formattedDuration}</Info>}
              <Info>Posted: {stylizedDate}</Info>
            </Metadata>
          </MetadataContainer>
        </Text>
      </Box>
    </Link>
  );
};

export default PostCard;

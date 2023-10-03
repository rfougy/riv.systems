import Link from "next/link";
import Image from "next/image";

import { capitalizeFirstChar } from "../../../../../utils/common/capitalizeFirstChar";

import { IPostFrontMatter } from "../../../../../interfaces/IPostFrontMatter";

import ArrowIcon from "../../../../icons/ArrowIcon";

import {
  Box,
  Category,
  Duration,
  Info,
  InfoBox,
  Metadata,
  MetadataContainer,
  Text,
  Title,
} from "./PostCard.styled";
import { dateToNumericStr } from "../../../../../utils/common/dateToNumericStr";

const PostCard: React.FC<{
  path: string;
  frontmatter: any;
}> = ({ path, frontmatter }) => {
  const {
    title,
    datePublished,
    category,
    section,
    coverImage,
    placeholderImage,
    worksDuration,
  }: IPostFrontMatter = frontmatter;
  const dateAsStr: string = dateToNumericStr(datePublished);

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
              {hasWorksDuration && <Info>Duration: {formattedDuration}</Info>}
              <Info>Published: {dateAsStr}</Info>
            </Metadata>
          </MetadataContainer>
        </Text>
      </Box>
    </Link>
  );
};

export default PostCard;

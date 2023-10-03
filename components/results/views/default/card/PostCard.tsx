import Link from "next/link";
import Image from "next/image";

import { capitalizeFirstChar } from "../../../../../utils/common/capitalizeFirstChar";
import { dateToStr } from "../../../../../utils/common/dateToStr";

import { IPostFrontMatter } from "../../../../../interfaces/IPostFrontMatter";

import ArrowIcon from "../../../../icons/ArrowIcon";

import {
  Box,
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

  return (
    <Link href={path}>
      <Box>
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
            <Metadata>
              <InfoBox>
                <Info>{capitalizeFirstChar(section)}</Info>
                <Info>
                  <ArrowIcon aria-label="Arrow Icon" right />
                </Info>
                <Info>{capitalizeFirstChar(category)}</Info>
              </InfoBox>
              <Info>{dateAsStr}</Info>
            </Metadata>
            {worksDuration && (
              <Duration>
                <Info>Duration:</Info>
                <Info>{formattedDuration}</Info>
              </Duration>
            )}
          </MetadataContainer>
        </Text>
      </Box>
    </Link>
  );
};

export default PostCard;

import Link from "next/link";
import Image from "next/image";

import { capitalizeFirstChar, dateToStr } from "../../../../../utils";
import { IPostFrontMatter } from "../../../../../interfaces/IPostFrontMatter";

import ArrowIcon from "../../../../icons/ArrowIcon";

import { Box, Info, InfoBox, Metadata, Text, Title } from "./PostCard.styled";

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
  }: IPostFrontMatter = frontmatter;
  const dateAsStr: string = dateToStr(datePublished);

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
        </Text>
      </Box>
    </Link>
  );
};

export default PostCard;

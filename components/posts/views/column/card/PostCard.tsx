import Link from "next/link";
import Image from "next/image";

import { capitalizeFirstChar, dateToStr } from "../../../../../utils";
import { IPostFrontMatter } from "../../../../../interfaces/IPostFrontMatter";

import ArrowIcon from "../../../../icons/ArrowIcon";

import {
  Container,
  Info,
  InfoContainer,
  Metadata,
  Text,
  Title,
} from "./PostCard.styled";

const PostCard: React.FC<{
  path: string;
  frontmatter: any;
  forSearchResults?: boolean;
}> = ({ path, frontmatter, forSearchResults }) => {
  const {
    title,
    datePublished,
    category,
    section,
    coverImage,
    placeholderImage,
  }: IPostFrontMatter = frontmatter;
  const dateAsStr: string = datePublished.replace(/-/g, "/");

  return (
    <Link href={path} passHref>
      <Container>
        <Image
          src={coverImage}
          alt={`Cover image for post titled '${title}'`}
          width={800}
          height={400}
          objectFit="cover"
          placeholder="blur"
          blurDataURL={placeholderImage}
        />
        <Text>
          <Title>{title}</Title>
          <Metadata>
            <InfoContainer>
              <Info>{capitalizeFirstChar(section)}</Info>
              <Info>
                <ArrowIcon aria-label="Arrow Icon" right />
              </Info>
              <Info>{capitalizeFirstChar(category)}</Info>
            </InfoContainer>
            <Info>{dateAsStr}</Info>
          </Metadata>
        </Text>
      </Container>
    </Link>
  );
};

export default PostCard;
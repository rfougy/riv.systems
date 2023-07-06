import Link from "next/link";
import Image from "next/image";

import { capitalizeFirstChar } from "../../../../utils";

import ArrowIcon from "../../../icons/ArrowIcon";
import {
  Container,
  ImageContainer,
  Info,
  InfoContainer,
  Metadata,
  Text,
  Title,
} from "./PostCard.styled";
import IPostData from "../../../../interfaces/IPostData";

const PostCard: React.FC<{
  post: IPostData;
}> = ({ post }) => {
  const {
    path,
    frontmatter: {
      title,
      datePublished,
      category,
      section,
      coverImage,
      placeholderImage,
    },
  } = post;

  const dateAsStr: string = datePublished.replace(/-/g, "/");

  return (
    <Link href={path}>
      <Container>
        <ImageContainer>
          <Image
            src={coverImage}
            alt={`Cover image for post titled '${title}'`}
            width={128}
            height={128}
            placeholder="blur"
            blurDataURL={placeholderImage}
            style={{
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </ImageContainer>
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

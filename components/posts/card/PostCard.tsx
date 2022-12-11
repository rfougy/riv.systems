import Link from "next/link";
import { Container, Info, Metadata, Text, Title } from "./PostCard.styled";
import Image from "next/image";
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstChar";
import { dateToStr } from "../../../utils/dateToStr";

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
    excerpt,
    coverImage: image,
  } = frontmatter;
  const dateAsStr: string = dateToStr(new Date(datePublished));

  return (
    <Link href={path} passHref>
      <Container>
        <Image
          src={`${image}`}
          alt={`Cover image for post titled '${title}'`}
          width={300}
          height={150}
          objectFit="cover"
        />
        <Text>
          <Title>{title}</Title>
          <Metadata>
            <Info>
              {capitalizeFirstChar(section)} &gt;{" "}
              {capitalizeFirstChar(category)}
            </Info>
            <Info>{dateAsStr}</Info>
          </Metadata>
        </Text>
      </Container>
    </Link>
  );
};

export default PostCard;

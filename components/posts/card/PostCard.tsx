import Link from "next/link";
import {
  Container,
  Info,
  InfoContainer,
  Metadata,
  Text,
  Title,
} from "./PostCard.styled";
import Image from "next/image";
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstChar";
import { dateToStr } from "../../../utils/dateToStr";
import ArrowIcon from "../../icons/ArrowIcon";

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
            <InfoContainer>
              <Info>{capitalizeFirstChar(section)}</Info>
              <Info>
                <ArrowIcon aria-label="Arrow Icon" left />
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

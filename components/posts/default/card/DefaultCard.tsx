import Link from "next/link";
import {
  Container,
  Info,
  InfoContainer,
  Metadata,
  Text,
  Title,
} from "./DefaultCard.styled";
import Image from "next/image";
import { capitalizeFirstChar, dateToStr } from "../../../../utils";
import ArrowIcon from "../../../icons/ArrowIcon";
import { IPostFrontMatter } from "../../../../interfaces/IPostFrontMatter";

const DefaultCard: React.FC<{
  path: string;
  frontmatter: any;
  forSearchResults?: boolean;
}> = ({ path, frontmatter, forSearchResults }) => {
  const {
    title,
    datePublished,
    category,
    section,
    coverImage: image,
  }: IPostFrontMatter = frontmatter;
  const dateAsStr: string = dateToStr(datePublished);

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

export default DefaultCard;

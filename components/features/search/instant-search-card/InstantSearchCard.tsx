import Link from "next/link";
import Image from "next/image";

import { dateToStr } from "../../../../utils";
import { IPostFrontMatter } from "../../../../interfaces/IPostFrontMatter";

import {
  Container,
  ImageContainer,
  Info,
  Text,
  Title,
} from "./InstantSearchCard.styled";

const InstantSearchCard: React.FC<{
  path: string;
  frontmatter: any;
}> = ({ path, frontmatter }) => {
  const { title, datePublished, coverImage }: IPostFrontMatter = frontmatter;

  const dateAsStr: string = dateToStr(datePublished);

  return (
    <Link href={path}>
      <Container>
        <ImageContainer>
          <Image
            src={coverImage}
            alt={`Cover image for post titled '${title}'`}
            height={100}
            width={100}
            style={{
              borderRadius: "1rem",
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover"
            }} />
        </ImageContainer>
        <Text>
          <Title>{title}</Title>
          <Info>{dateAsStr}</Info>
        </Text>
      </Container>
    </Link>
  );
};

export default InstantSearchCard;

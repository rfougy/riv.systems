import Link from "next/link";
import Image from "next/image";

import { dateToStr } from "../../../../utils";
import { IPostFrontMatter } from "../../../../interfaces/IPostFrontMatter";

import { Container, Info, Text, Title } from "./InstantSearchCard.styled";

const InstantSearchCard: React.FC<{
  path: string;
  frontmatter: any;
}> = ({ path, frontmatter }) => {
  const { title, datePublished, coverImage }: IPostFrontMatter = frontmatter;

  const dateAsStr: string = dateToStr(datePublished);

  return (
    <Link href={path} passHref>
      <Container>
        <Image
          src={coverImage}
          alt={`Cover image for post titled '${title}'`}
          width={100}
          height={100}
          objectFit="cover"
          style={{ borderRadius: "1rem" }}
        />
        <Text>
          <Title>{title}</Title>
          <Info>{dateAsStr}</Info>
        </Text>
      </Container>
    </Link>
  );
};

export default InstantSearchCard;
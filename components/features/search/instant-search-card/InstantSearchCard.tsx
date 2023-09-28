import Link from "next/link";
import Image from "next/image";

import { dateToStr } from "../../../../utils/common/dateToStr";
import { IPostFrontMatter } from "../../../../interfaces/IPostFrontMatter";

import { Box, ImageBox, Info, Text, Title } from "./InstantSearchCard.styled";

const InstantSearchCard: React.FC<{
  path: string;
  frontmatter: any;
}> = ({ path, frontmatter }) => {
  const { title, datePublished, coverImage }: IPostFrontMatter = frontmatter;

  const dateAsStr: string = dateToStr(datePublished);

  return (
    <Link href={path}>
      <Box>
        <ImageBox>
          <Image
            src={coverImage}
            alt={`Cover image for post titled '${title}'`}
            height={100}
            width={100}
            style={{
              borderRadius: "1rem",
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />
        </ImageBox>
        <Text>
          <Title>{title}</Title>
          <Info>{dateAsStr}</Info>
        </Text>
      </Box>
    </Link>
  );
};

export default InstantSearchCard;

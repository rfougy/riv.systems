import Link from "next/link";
import * as S from "./PostCard.styled";
import * as G from "../../../styles/Globals.styled";
import Image from "next/image";
import { useEffect } from "react";

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
  const formattedDatePublished: string = datePublished.replaceAll("-", ".");

  return (
    <Link href={path} passHref>
      <S.Container>
        <Image
          src={`${image}`}
          alt={`Cover image for post titled '${title}'`}
          width={300}
          height={239}
          objectFit="cover"
        />{" "}
        <G.H2>{title}</G.H2>
        <G.H2>{formattedDatePublished}</G.H2>
        <G.H2>
          {section} &gt; {category}
        </G.H2>
      </S.Container>
    </Link>
  );
};

export default PostCard;

import Link from "next/link";
import * as S from "./PostCard.styled";
import Image from "next/image";

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
        <h2>{title}</h2>
        <h2>{formattedDatePublished}</h2>
        <h2>
          {section} &gt; {category}
        </h2>
      </S.Container>
    </Link>
  );
};

export default PostCard;

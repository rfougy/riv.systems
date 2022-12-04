import Link from "next/link";
import { Container, Metadata, P } from "./PostCard.styled";
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
      <Container>
        <Image
          src={`${image}`}
          alt={`Cover image for post titled '${title}'`}
          width={300}
          height={300}
          objectFit="cover"
        />{" "}
        <h2>{title}</h2>
        <div>
          <Metadata>{formattedDatePublished}</Metadata>
          <Metadata>
            {section} &gt; {category}
          </Metadata>
        </div>
      </Container>
    </Link>
  );
};

export default PostCard;

import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import { dateToStr } from "../../../utils/dateToStr";
import DisplayDotsAnime from "../../features/display-dots-anime/DisplayDotsAnime";
import {
  Inline,
  Metadata,
  P,
  MarginBottom,
  Container,
} from "./PostPage.styled";

const PostPage: React.FC<{ slug: string; content: any }> = ({
  slug,
  content,
}) => {
  const { frontmatter, postContent } = content;
  const { title, datePublished, coverImage } = frontmatter;
  const section: string = slug[0];
  const category: string = slug[1];
  const dateAsStr: string = dateToStr(new Date(datePublished));

  return content ? (
    <Container>
      <Metadata>
        <Link href={`/content/${section}`}>{section}</Link>
        <Inline>&gt;</Inline>
        <Link href={`/content/${section}/${category}`}>{category}</Link>
        <P>{dateAsStr}</P>
      </Metadata>
      <MarginBottom>
        <DisplayDotsAnime text={"SYS"} />
      </MarginBottom>
      <Image
        src={coverImage}
        alt={`Cover image for the blog post titled ${title}`}
        width={100}
        height={300}
        objectFit="cover"
      />
      <Markdown options={{ wrapper: "article" }}>{postContent}</Markdown>
    </Container>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostPage;

import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstChar";
import { dateToStr } from "../../../utils/dateToStr";
import PageHead from "../../head/page/PageHead";
import ArrowIcon from "../../icons/ArrowIcon";
import {
  Inline,
  Metadata,
  P,
  MarginBottom,
  Container,
  Title,
  Content,
} from "./PostPage.styled";

const PostPage: React.FC<{ slug: string; content: any }> = ({
  slug,
  content,
}) => {
  const { frontmatter, postContent } = content;
  const { title, datePublished, coverImage, excerpt } = frontmatter;
  const section: string = slug[0];
  const category: string = slug[1];
  const dateAsStr: string = dateToStr(new Date(datePublished));

  return content ? (
    <>
      <PageHead title={title} description={excerpt} />
      <Container>
        <Metadata>
          <Link href={`/content/${section}`}>
            {capitalizeFirstChar(section)}
          </Link>
          <Inline>
            <ArrowIcon />
          </Inline>
          <Link href={`/content/${section}/${category}`}>
            {capitalizeFirstChar(category)}
          </Link>
          <P>{dateAsStr}</P>
        </Metadata>
        <MarginBottom>
          <Title>{title}</Title>
        </MarginBottom>
        <Image
          src={coverImage}
          alt={`Cover image for the blog post titled ${title}`}
          width={100}
          height={300}
          objectFit="cover"
          style={{ borderRadius: "2vh" }}
        />
        <Content>
          <Markdown options={{ wrapper: "article", forceBlock: true }}>
            {postContent}
          </Markdown>
        </Content>
      </Container>
    </>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostPage;

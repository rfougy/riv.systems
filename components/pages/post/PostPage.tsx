import Markdown from "markdown-to-jsx";
import Image from "next/image";
import Link from "next/link";
import { capitalizeFirstChar } from "../../../utils/capitalizeFirstChar";
import { dateToStr } from "../../../utils/dateToStr";
import PageHead from "../../head/page/PageHead";
import ArrowIcon from "../../icons/ArrowIcon";
import NextImage from "../../markdown-to-jsx/NextImage";
import {
  Inline,
  Metadata,
  Li,
  Container,
  Title,
  Content,
  CoverImage,
  Header,
} from "./PostPage.styled";

const PostPage: React.FC<{ slug: string; content: any }> = ({
  slug,
  content,
}) => {
  const { frontmatter, postContent } = content;
  const { title, datePublished, coverImage, excerpt } = frontmatter;
  const section: string = slug[0];
  const category: string = slug[1];
  const dateAsStr: string = dateToStr(datePublished);

  return content ? (
    <>
      <PageHead title={title} description={excerpt} />
      <Container>
        {section !== "refs" && (
          <CoverImage>
            <Image
              priority
              src={coverImage}
              alt={`Cover image for the blog post titled ${title}`}
              width={800}
              height={400}
              objectFit="cover"
              style={{ borderRadius: "2vh" }}
            />
          </CoverImage>
        )}
        <Header>
        <Metadata>
          <Inline>
            <Link href={`/content/${section}`}>
              {capitalizeFirstChar(section)}
            </Link>
          </Inline>
          <Inline>
            <ArrowIcon aria-label="Arrow Icon" />
          </Inline>
          <Inline>
            <Link href={`/content/${section}/${category}`}>
              {capitalizeFirstChar(category)}
            </Link>
          </Inline>
          <Li>
            <p>{dateAsStr}</p>
          </Li>
        </Metadata>
        <Title>{title}</Title>
        </Header>
        <Content>
          <Markdown
            options={{
              wrapper: "article",
              forceBlock: true,
              overrides: {
                img: {
                  component: NextImage,
                },
                Image: {
                  component: NextImage,
                },
              },
            }}
          >
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

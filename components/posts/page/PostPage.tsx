import Image from "next/image";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

import { IPostFrontMatter } from "../../../interfaces/IPostFrontMatter";
import { capitalizeFirstChar, dateToStr } from "../../../utils";

import NextImage from "../../markdown-to-jsx/NextImage";

import ArrowIcon from "../../icons/ArrowIcon";

import {
  Inline,
  Metadata,
  Li,
  Container,
  Title,
  Content,
  CoverImage,
  Header,
  Excerpt,
  Margin,
  HeaderContainer,
} from "./PostPage.styled";
import Slideshow from "../../markdown-to-jsx/slideshow/Slideshow";
import SlideDisplay from "../../markdown-to-jsx/slideshow/slide-display/SlideDisplay";

const PostPage: React.FC<{ slug: string; content: any }> = ({
  slug,
  content,
}) => {
  const { frontmatter, postContent }: any = content;
  const {
    title,
    datePublished,
    coverImage,
    excerpt,
    placeholderImage,
  }: IPostFrontMatter = frontmatter;
  const section: string = slug[0];
  const category: string = slug[1];
  const dateAsStr: string = dateToStr(datePublished);

  return content ? (
    <Container>
      <Header>
        <HeaderContainer>
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
          <Excerpt>{excerpt}</Excerpt>
          <Margin />
        </HeaderContainer>
      </Header>
      <CoverImage>
        <Image
          priority
          src={coverImage}
          alt={`Cover image for the blog post titled ${title}`}
          width={800}
          height={400}
          objectFit="cover"
          style={{ borderRadius: "2vh" }}
          placeholder="blur"
          blurDataURL={placeholderImage}
        />
      </CoverImage>
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
              Slideshow: {
                component: Slideshow,
              },
              Slide: {
                component: SlideDisplay,
              },
            },
          }}
        >
          {postContent}
        </Markdown>
      </Content>
    </Container>
  ) : (
    <div>Error: No content available...</div>
  );
};

export default PostPage;
